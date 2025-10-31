const db = require("../models/ConnectDatabase");

class CurrencyRepository {
  async findAll() {
    const query = "SELECT * FROM Currency";
    return await db.query(query);
  }

  async create({ name, type }) {
    const query = "INSERT INTO Currency (name, type) VALUES (?, ?)";
    const result = await db.query(query, [name, type]);
    return { id: result.insertId, name, type };
  }
}

module.exports = new CurrencyRepository();
