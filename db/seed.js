// -------This file will Reset your Database--------- //

const client = require("./client");
const { Captain, Ship } = require("./adapters");
const { space_ships, captains } = require("./seedData");
// const { createCaptain } = require("./adapters/captains");

// Drop Tables
const dropTables = async () => {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS space_ships;
      DROP TABLE IF EXISTS captains;
    `);
  } catch (error) {
    console.log("Error when dropping tables");
    throw error;
  }
};
// Create Tables
const createTables = async () => {
  try {
    console.log("Starting to build tables...");
    await client.query(`
    CREATE TABLE captains (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      rank VARCHAR(255) NOT NULL,
      military_id INTEGER UNIQUE NOT NULL
    );

    CREATE TABLE space_ships (
      id SERIAL PRIMARY KEY,
      ship_name VARCHAR(255) UNIQUE NOT NULL,
      ship_class VARCHAR(255) NOT NULL,
      ship_serial INTEGER NOT NULL,
      captain_id INTEGER REFERENCES captains(id)
    );
   `);
  } catch (error) {
    console.log("Error when creating tables");
    throw error;
  }
};

// Seed Data
const seedData = async () => {
  console.log("Seeding Captains......");
  for (const captain of captains) {
    await Captain.createCaptain(captain);
  }
  console.log("Seeding ships........");
  for (const ship of space_ships) {
    await Ship.createShip(ship);
  }
};
// Call all of the functions together and 'BUILD' you db
const rebuildDb = async () => {
  try {
    client.connect();
    // call your functions in the correct order!
    await dropTables();
    await createTables();
    await seedData();
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    client.end();
  }
};

// Call the rebuildDb function
rebuildDb();
