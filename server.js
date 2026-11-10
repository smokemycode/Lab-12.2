import express from 'express'

const app = express()
const port = 3000;
const FUN_FACT_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

app.get('/', (req, res) => {
    res.send("☕ The Daily Grind server is awake!")
});

app.get('/api/fun-fact', async (req, res) => {
        const response = await fetch(FUN_FACT_URL);
        const funFact = await response.json();

    console.log(funFact);
    res.send('Check your terminal!');
    });

app.listen(port, () => {
    console.log(`☕ The Daily Grind server is running at http://localhost:${port}`);
});
