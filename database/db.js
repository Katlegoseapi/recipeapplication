import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db");

export { db };
 
//Endpoint For Cusines:
export function getAllCusines() {
  return new Promise(function (resolve, reject) {
    db.all("SELECT * FROM Cusines", function (err, rows) {
      if (err) {
        reject({ error: err });
      } else {
        resolve(rows);
      }
    });
  });
}

//Endpoint For Bakery:
export function getAllBakery() {
  return new Promise(function (resolve, reject) {
    db.all("SELECT * FROM Bakery", function (err, rows) {
      if (err) {
        reject({ error: err });
      } else {
        resolve(rows);
      }
    });
  });
}

//Endpoint For Diet:
export function getAllDiet() {
  return new Promise(function (resolve, reject) {
    db.all("SELECT * FROM Diet", function (err, rows) {
      if (err) {
        reject({ error: err });
      } else {
        resolve(rows);
      }
    });
  });
}


