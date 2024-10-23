const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.post("/", (req, res) => {
  const { password } = req.body;

  const storedPassword = "password"; //don't store password in the code in production

  if (password === storedPassword) {
    res.status(200).json({ message: true });
  } else {
    res.status(401).json({ message: false });
  }
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
