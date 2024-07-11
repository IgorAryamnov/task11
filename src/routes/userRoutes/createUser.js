const { addUser } = require("../../sql3Data");

module.exports = async (req, res) => {
  const body = req.body;
  const name = body.name;
  const age = body.age;

  if (name && age) {
    const user = { name, age: parseInt(age) };
    const createdUser = await addUser(user);

    if (createdUser) {
      res.status(201).json(createdUser);
    } else {
      res.status(500).json({ message: "Could not create user" });
    }
  } else {
    res.status(400).json({ message: "Name and age are required" });
  }
};
