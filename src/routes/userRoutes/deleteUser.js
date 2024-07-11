const { deleteUser } = require("../../sql3Data");

module.exports = async (req, res) => {
  const id = Number(req.params.id);
  const success = await deleteUser(id);

  if (success === "error") {
    res.status(500).json({ message: "Could not delete user" });
  } else {
    if (success) {
      res.status(200).json({ message: "User was deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
};
