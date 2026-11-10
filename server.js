import express from 'express'

const app = express()
const port = 3000;
const FUN_FACT_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

app.get('/', (req, res) => {
    res.send("☕ The Daily Grind server is awake!")
});

app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await fetch(FUN_FACT_URL);
        if (!response.ok) {
            throw new Error(`External API responded with status ${response.status}`);
        }

        const funFact = await response.json();

        res.json({ fact: funFact.text });
    } catch (error) {
        res.status(500).json({ error: "Could not fetch fun fact" });
    }
});

app.listen(port, () => {
    console.log(`☕ The Daily Grind server is running at http://localhost:${port}`);
});
