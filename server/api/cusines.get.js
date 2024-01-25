

import {db} from "~/database/db.js";


export default defineEventHandler(async (event) => {
   return db.all("SELECT * FROM Cusines;", (err) => {
    console.log();
    return
   });
 });
  