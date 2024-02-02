import { db } from "../../database/db.js";
import { getAllDiet } from "../../database/db.js";

export default defineEventHandler(async (event) => {
  try {
    const data = await getAllDiet();
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching data from the database.",
    };
  }
});
