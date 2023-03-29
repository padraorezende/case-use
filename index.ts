const fs = require('fs');

// Lê o arquivo JSON
const jsonString = fs.readFileSync('./arquviodesaida.json', 'utf-8');

// Analisa o conteúdo do arquivo JSON e converte em um objeto JavaScript
const jsonData = JSON.parse(jsonString);

// Cria um novo array apenas com os valores dos atributos 'comment'
const commentsArray = jsonData.flatMap(root => [
  ...root.single_line_comment.map(comment => ({  message: comment.comment })),
  ...root.cont_single_line_comment.map(comment => ({  message: comment.comment })),
  ...root.multi_line_comment.map(comment => ({  message: comment.comment }))
]);

const outputData = { comments: commentsArray };

fs.writeFileSync('./arquivoDeSaida.json', JSON.stringify(outputData, null, 2));

console.log('Arquivo gerado com sucesso!');