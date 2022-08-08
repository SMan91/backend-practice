const client = require("../client");

/*
      ship_name VARCHAR(255) UNIQUE NOT NULL,
      ship_class VARCHAR(255) NOT NULL,
      ship_serial INTEGER NOT NULL,
      captain_id INTEGER REFERENCES captains(id)
*/

const createShip = async (ship) => {
  const { ship_name, ship_class, ship_serial, captain_id } = ship;
  await client.query(
    `
        INSERT INTO space_ships (ship_name, ship_class, ship_serial, captain_id)
        VALUES  ($1, $2, $3, $4)
        `
  ),
    [ship_name, ship_class, ship_serial, captain_id];
};

const getAllShips = async () => {
  const { rows } = await client.query(`SELECT * FROM space_ships`);

  return rows;
};

module.exports = {
  createShip,
  getAllShips,
};
