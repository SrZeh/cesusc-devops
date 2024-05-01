const express = require('express');
const path = require('path');

const app = express();

// Define o diretório de visualização como 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Define o endpoint '/index' para retornar a página HTML
app.get('/index', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'views') });
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
