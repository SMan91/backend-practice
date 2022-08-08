// Create some seed data for your DB!

//space ships
/*
      ship_name varchar(255) UNIQUE NOT NULL,
      ship_class varchar(255) NOT NULL,
      ship_serial INTEGER NOT NULL,
      captain_id INTEGER REFERENCES captains(id)
*/
const space_ships = [
  {
    ship_name: "Inevitable",
    ship_class: "Cruiser",
    ship_serial: 13585691,
    captain_id: 3,
  },

  {
    ship_name: "Chariot",
    ship_class: "Fleet Auxiliary",
    ship_serial: 15487965,
    captain_id: 2,
  },

  {
    ship_name: "Broadsword",
    ship_class: "Destroyer",
    ship_serial: 52169875,
    captain_id: 1,
  },

  {
    ship_name: "Indomitable",
    ship_class: "Battleship",
    ship_serial: 32165498,
    captain_id: 5,
  },

  {
    ship_name: "Sovereign",
    ship_class: "Supercarrier",
    ship_serial: 7777777,
    captain_id: 7,
  },
];

//Captains
/*
      name VARCHAR(255) NOT NULL,
      rank VARCHAR(255) NOT NULL
      military_id INTEGER UNIQUE NOT NULL
*/

const captains = [
  {
    name: "Marjory Stewart Backster",
    rank: "Captain",
    military_id: 156809,
  },

  {
    name: "Hubert Cumberdale",
    rank: "Captain",
    military_id: 7894571,
  },

  {
    name: "Bartholemue Tramborough",
    rank: "Commander",
    military_id: 81938,
  },

  {
    name: "Nina Winslow",
    rank: "Captain",
    military_id: 547182,
  },
  {
    name: "Heather Cuthbert",
    rank: "Commander",
    military_id: 17368,
  },

  {
    name: "John McGumby",
    rank: "Captain",
    military_id: 767344,
  },

  {
    name: "Jack Yarrow",
    rank: "Grand Admiral",
    military_id: 178602,
  },
];

module.exports = { space_ships, captains };
