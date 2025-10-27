const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);

    const savedUser = await newUser.save();

    return res.status(201).json(savedUser);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erro ao cadastrar usuário", error: error.message });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao listar usuários", error: error.message });
  }
};

module.exports = {
  createUser,
  listUsers,
};
