const { updateUser } = require("../../sql3Data");

module.exports = async (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const name = body.name;
  const age = parseInt(body.age);
  const updatedData = { name, age };

  if (name && age) {
    const updatedUser = await updateUser(id, updatedData);

    if (updatedUser === "error") {
      res.status(500).json({ message: "Could not update user" });
    } else {
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  } else {
    res.status(400).json({ message: "Name and age are required" });
  }
};
