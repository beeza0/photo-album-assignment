import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

const userRouter = require("./routers/User");
const albumRouter = require("./routers/Album");
const photoRouter = require("./routers/Photo");

app.use("/user", userRouter);
app.use("/album", albumRouter);
app.use("/photo", photoRouter);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
