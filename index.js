const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const filecontent = fs.readFileSync('front.html');
const app = express();
const port = 8000;
const offensiveWordsJson = fs.readFileSync('offensive-words.json');
const offensiveWords = JSON.parse(offensiveWordsJson);


app.use(bodyParser.json());
app.listen(port , () => console.log(`App is listening on port ${port}`));

app.get('/', function(req, res) {
    res.sendFile('./front.html', {root: __dirname })
});
// const offensiveWords = ['offensive', 'words', 'list'];

app.post('/filter', (req, res) => {
  const text = req.body.text;
  console.log(text);
  let filteredText = text;

  offensiveWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    filteredText = filteredText.replace(regex, '*'.repeat(word.length));
  });

  res.json({ filteredText });
});

