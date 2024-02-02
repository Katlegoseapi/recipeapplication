import { db } from "../../database/db.js";
import { getAllBakery } from "../../database/db.js";

export default defineEventHandler(async (event) => {
  try {
    const data = await getAllBakery();
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "",
    };
  }
});
