const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const hurricanesController = require('./controllers/hurricanes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/hurricanes', hurricanesController);

app.get('/', (req, res) => {
    res.send('This is your 2018 Hurricane season')
  });

app.listen(3000, () => {
    console.log('listening on port 3000')
  })