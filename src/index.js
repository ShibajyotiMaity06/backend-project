import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
