import { db } from "../../database/db.js";
import { getAllCusines } from "../../database/db.js";

export default defineEventHandler(async (event) => {
  try {
    const data = await getAllCusines();
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching data from the database.",
    };
  }
});
