# Lê o conteúdo do arquivo JSON
$json = Get-Content -Raw arquivoDeSaida.json | ConvertFrom-Json

# Cria um array vazio para armazenar as linhas que serão escritas no CSV
$csvLines = @()

# Altera sobre cada array de comentários
$json.comments | ForEach-Object {
    # Concatena os comentários em uma única string separada por quebra de linha
    $comment = $_.message -join "`n"

    Write-Output $comment

    # Executa o comando com o comentário como input e armazena a saída em uma variável
    $output = Write-Output $comment | java -jar satd_detector.jar test

    # Verifica se a saída contém a string "SATD"
    if ($output -like "*SATD*") {
        # Se contém, adiciona uma linha ao array com o valor "SATD" e o comentário
        $csvLine = [PSCustomObject]@{
            Status = "SATD"
            Comment = $comment
        }
        $csvLines += $csvLine
    } else {
        # Se não contém, adiciona uma linha ao array com o valor "Not SATD" e o comentário
        $csvLine = [PSCustomObject]@{
            Status = "Not SATD"
            Comment = $comment
        }
        $csvLines += $csvLine
    }
}

# Exporta as linhas do array para um arquivo CSV
$csvLines | Export-Csv -Path "saida.csv" -NoTypeInformation