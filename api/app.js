const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000;

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/nba';

const options = {
    useNewUrlParser: true
}

mongoose.connect(mongoURI, options)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

const teams = require('./routes/teams');

app.use(express.json());

app.use('/teams', teams);

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
})



