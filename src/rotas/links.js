const express = require('express');

const router = express.Router();

let links = [];
let proximoId = 1;

router.get('/', (req, res) => {
  return res.status(200).json(links);
});

router.post('/', (req, res) => {
  const { titulo, url } = req.body;

  if (!titulo || !url) {
    return res.status(400).json({ erro: 'O título e a URL são obrigatórios.' });
  }

  const novoLink = {
    id: proximoId++,
    titulo,
    url
  };

  links.push(novoLink);
  return res.status(201).json(novoLink);
});

module.exports = router;
