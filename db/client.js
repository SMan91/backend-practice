const { Client } = require("pg");

const dbName = "spaceships-dev";

const client = new Client(`postgres://localhost:5432/${dbName}`);

module.exports = client;
