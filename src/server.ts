import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

const bootstrap = async () => {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => console.log("Successfullly connected with database!"));

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to database connection", err);
  }
};

bootstrap();
