# The Daily Grind Server ☕

A simple Express.js server I built for a fictional coffee shop called **The Daily Grind**.

## What It Does

When you go to the `/api/fun-fact` endpoint, the server fetches a random fact from the [Use;ess Facts API](https://uselessfacts.jsph.pl/) and returns it in a clean simple format.

## Built With

- **Node.js** — runs JavaScript outside the browser
- **Express** — a lightweight framework for building servers
- **fetch** — built into Node
- **Git + GitHub** — for version control and submission

## Reflection 

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
    - Because the client only asked for the fact and not the extra info. A clean response is smaller, faster, and if the external API changes its field names later, only my code will break and not the client's.

2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
    - Because the real error can leak internal stuff to anyone who has the endpoint. It also will not help the client as they do not know what is being shown to them. Instead a friendly "couldn't fetch the fact" suffices.

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
    - I would read the language off the request instead of hardcoding it: 
    ```
    const lang = req.query.language || 'en';
    const url = `${FACT_API_URL}?language=${lang}`;
    ```
    This way if there is no other language it will default to English.