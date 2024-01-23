// const sqlite3 = require('sqlite3');


import db from "~/database/db.js";
export default defineEventHandler(async (event) => {
   
    // db.all('SELECT * FROM Cusines', (err, rows) => {
    //     console.log('Data fetched successfully:', rows);
    //     res.json(rows);
    // });
    return db.all("SELECT * FROM Cusines", (err, rows) => {console.log('Data fetched successfully:', rows)}) 

 })
  