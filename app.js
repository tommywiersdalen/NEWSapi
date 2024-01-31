const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { caluclateScore } = require('./calculateNEWScore.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.post('/NEWSscore', (req, res) => {
    const measurements = req.body;
    const score = caluclateScore(measurements);
    res.json({ score: score });

});

