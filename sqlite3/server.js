const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 4000;

const db = new sqlite3.Database('database.db');

// Endpoint for Cusines table
app.get('/api/cusines', (req, res) => {
    console.log('Fetching data from Cusines table...');
    db.all('SELECT * FROM Cusines', (err, rows) => {
        if (err) {
            console.error('Error querying Cusines table:', err.message);
            res.status(500).send({ error: err.message });
            return;
        }
        console.log('Data fetched successfully:', rows);
        res.json(rows);
    });
});

// Endpoint for Bakery table
app.get('/api/bakery', (req, res) => {
    db.all('SELECT * FROM Bakery', (err, rows) => {
        if (err) {
            res.status(500).send({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint for Diet table
app.get('/api/diet', (req, res) => {
    db.all('SELECT * FROM Diet', (err, rows) => {
        if (err) {
            res.status(500).send({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
