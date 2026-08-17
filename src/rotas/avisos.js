
const express = require('express');
const router = express.Router();
 
let avisos = [];
let proximoId = 1;
 
router.get('/', (req, res) => {
  res.json({ avisos });
});
 
router.post('/', (req, res) => {
  const { titulo, mensagem } = req.body;
 
  if (!titulo || !mensagem) {
    return res.status(400).json({ erro: 'titulo e mensagem são obrigatórios' });
  }
 
  const novoAviso = { id: proximoId++, titulo, mensagem };
  avisos.push(novoAviso);
 
  res.status(201).json(novoAviso);
});
 
module.exports = router;
 
