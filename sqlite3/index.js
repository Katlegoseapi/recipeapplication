const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('\database.db', (err) => {
    if (err) {
    console.error(err.message);
    }
    console.log('Connected to the data database.');
    });
    db.all('SELECT * FROM Bakery WHERE RecipeName="Cookies";', [], (err, tables) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(tables);
    });
    