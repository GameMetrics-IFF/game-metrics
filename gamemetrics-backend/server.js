const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Conexão com MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // usuário correto
  password: '1234',   // senha correta
  database: 'gamemetrics'
});

db.connect(err => {
  if (err) {
    console.log('Erro ao conectar:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

// ------------------ ROTAS CRUD ------------------

// Listar todos os jogadores
app.get('/players', (req, res) => {
  db.query('SELECT * FROM players', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Inserir novo jogador
app.post('/players', (req, res) => {
  const { name, score } = req.body;
  db.query('INSERT INTO players (name, score) VALUES (?, ?)', [name, score], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name, score });
  });
});

// Atualizar jogador por ID
app.put('/players/:id', (req, res) => {
  const { id } = req.params;
  const { name, score } = req.body;
  db.query('UPDATE players SET name = ?, score = ? WHERE id = ?', [name, score, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ id, name, score });
  });
});

// Deletar jogador por ID
app.delete('/players/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM players WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: `Jogador ${id} deletado` });
  });
});

// ------------------ INICIAR SERVIDOR ------------------
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});