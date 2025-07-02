const express = require("express");
const connectDB  = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/userConnection");
const searchRouter = require("./routes/search");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", searchRouter);
connectDB()
  .then(() => {
    console.log("database connection establish");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000...");
    });
  })
  .catch((err) => console.error(err));