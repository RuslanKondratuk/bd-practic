const express = require('express');
const HeroController = require('./controllers/hero.controller');
const {pagination} = require('./middlewares/pagnation')

const app = express();
const bodyParser = express.json();


app.use(bodyParser);
// app.use(express.static('public'));

app.post('/', HeroController.createHero)
app.put('/:heroId', HeroController.updateHero)
app.get('/', pagination, HeroController.getHeroes)
app.get('/:heroId', HeroController.getOneHeroes)
app.delete('/:heroId', HeroController.deleteHero)

module.exports = app;
