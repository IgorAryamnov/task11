const { getUsers } = require("../../sql3Data");

module.exports = async (req, res) => {
  const users = await getUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({ message: "Could not retrieve users" });
  }
};
