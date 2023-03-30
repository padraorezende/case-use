# Caso de Uso 02

Avaliando o Interplay entre SATD-C e SATD-I

## Alunos integrantes da equipe

* João Victor Tadeu Chaves Frois
* Lucas Gabriel Padrão Rezende

## Professores responsáveis

* Jose Laerte Pires Xavier Junior

## 🔖 Requisitos

- [Java](https://www.oracle.com/br/java/technologies/downloads/)
- [Python](https://www.python.org/downloads/)
- [Nirjas](https://github.com/fossology/Nirjas)
- [SATD Detector Core](https://github.com/Tbabm/SATDDetector-Core)
- [Yarn](https://yarnpkg.com/)

## 🚀 Como executar

Clone o repositorio que deseja analizar.

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/padraorezende/case-use.git
$ cd case-use
```

Execute o comando para extrair as linhas de comentarios de codigo:

```bash
nirjas <path to directorio do repositorio que deseja analizar> > arquviodesaida.json
```

Apos gerar o arquivo arquviodesaida.json executar o comando:

```bash
yarn test
```

Apos gerar o arquivo arquivoDeSaida.json altere o ./satd_detector.jar no diretorio especificado de acordo com as dependecias do seu computador para evitar erros e depois execute o comando :

```bash
.\script.ps1
```

Caso não exista permissao para executar scripts remotos :

```bash
Set-ExecutionPolicy Unrestricted -Scope LocalMachine
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```
