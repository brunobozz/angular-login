const User = require("../models/user");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [allUsers] = await User.fetchAll();
    res.status(200).json(allUsers);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const postResponse = await User.post(
      req.body.nome,
      req.body.sexo,
      req.body.email,
      req.body.cpf,
      req.body.perfil,
      req.body.senha
    );
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putUser = async (req, res, next) => {
  try {
    const putResponse = await User.update(
      req.body.id,
      req.body.nome,
      req.body.sexo,
      req.body.email,
      req.body.cpf,
      req.body.perfil,
      req.body.senha
    );
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const deleteResponse = await User.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
