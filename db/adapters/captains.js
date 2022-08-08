const client = require("../client");

const createCaptain = async (captain) => {
  const { name, rank, military_id } = captain;
  await client.query(
    `
    INSERT INTO captains (name, rank, military_id)
    VALUES ($1, $2, $3)
    `,
    [name, rank, military_id]
  );
};

const getAllCaptains = async () => {
  const { rows } = await client.query(
    `
        SELECT * FROM captains
        `
  );
  return rows;
};

module.exports = {
  createCaptain,
  getAllCaptains,
};
