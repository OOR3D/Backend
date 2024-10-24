const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(cors());

app.use(express.json());
app.use(morgan("combined"));

morgan.token("id", function getId(req) {
  return req.id;
});

app.use(morgan(":id :method :url :response-time"));

app.post("/api", (req, res) => {
  const { password } = req.body;

  const storedPassword = "Pass99osorioxmfmgnt"; //don't store password in the code in production

  if (password === storedPassword) {
    res.status(200).json({ message: true });
  } else {
    res.status(401).json({ message: false });
  }
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
