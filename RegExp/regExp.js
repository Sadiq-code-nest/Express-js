const express = require('express');
const app = express();
const port = 3000;
app.get("/products/:id([0-9]+)", (req, res) => {
    res.send(`<h1>Id is - ${req.params.id}</h1>`)
});

app.use('*', (req, res) => res.status(400).send(
    {
        message: " not a valid Router"
    }
))
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
