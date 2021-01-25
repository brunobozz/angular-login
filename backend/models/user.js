const db = require("../util/database");

module.exports = class User {
  constructor(id, nome, sexo, email, cpf, perfil, senha) {
    this.id = id;
    this.nome = nome;
    this.sexo = sexo;
    this.email = email;
    this.cpf = cpf;
    this.perfil = perfil;
    this.senha = senha;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM user");
  }

  static post(nome, sexo, email, cpf, perfil, senha) {
    return db.execute(
      "INSERT INTO user (nome, sexo, email, cpf, perfil, senha) VALUES (?,?,?,?,?,?)",
      [nome, sexo, email, cpf, perfil, senha]
    );
  }

  static update(id, nome, sexo, email, cpf, perfil, senha) {
    return db.execute(
      "UPDATE user SET nome = ?, sexo = ?, email = ?, cpf = ?, perfil = ?, senha = ?, WHERE id = ?",
      [nome, sexo, email, cpf, perfil, senha, id]
    );
  }

  static delete(id) {
    return db.execute("DELETE FROM user WHERE id = ?", [id]);
  }
};
