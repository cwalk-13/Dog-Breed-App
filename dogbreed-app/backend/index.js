const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const dogbreeds = require('./routes/dogbreeds');

app.use(express.json());

// app.use('/dogbreeds', dogbreeds)
app.use(dogbreeds)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// app.post("/login", (req, res) => {
//   res.status(200).send("get endpoint");
// });

// app.get("/private", (req, res) => {
//   res.status(200).send("post endpoint");
// });

// app.listen(3001, () => {
//   console.log("listening on port 3001...");
// });
