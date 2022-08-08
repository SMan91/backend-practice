const express = require("express");
const PORT = 4000;
const server = express();

// require and connect to the client
const client = require("./db/client");

// Add any middleware you made need

// Add your API routes

// Add an error handler

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
