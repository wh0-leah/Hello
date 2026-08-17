
const express = require('express');
const router = express.Router();

let opcoes = [
  { nome: 'Node.js', votos: 0 },
  { nome: 'Python', votos: 0 },
  { nome: 'Java', votos: 0 },
];
 

router.get('/', (req, res) => {
  res.json({ opcoes });
});
 
router.post('/voto', (req, res) => {
  const { opcao } = req.body;
 
  const alvo = opcoes.find((o) => o.nome === opcao);
 
  if (!alvo) {
    return res.status(400).json({ erro: 'Opção inexistente' });
  }
 
  alvo.votos += 1;
  res.status(200).json({ opcoes });
});
 
module.exports = router;
