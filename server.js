const express = require("express");
const userRouter = require("./users/userRouter");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());
server.use(logger);

const welcomeMsg = "Let's write some middleware";
server.get("/", (req, res) => {
  res.send(`<h2>${welcomeMsg}</h2>`);
});

server.use("/users", userRouter);

server.use((req, res) => {
  res.status(400).json({ msg: "Route was not found" });
});

//custom middleware

function logger(req, res, next) {
  req.time = Date.now();
  console.log(`${req.method} to ${req.originalUrl} made at ${req.time}`);
  next();
}

const hostName = process.env.hostName || "21.0.0.1";
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server listening on ${hostName}:${PORT}`);
});

module.exports = server;
