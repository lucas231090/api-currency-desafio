const db = require("../models/ConnectDatabase");

class InvestorRepository {
  async findByEmail(email) {
    const query = "SELECT * FROM Investor WHERE email = ?";
    const rows = await db.query(query, [email]);
    return rows[0];
  }

  async create({ name, email }) {
    const query = "INSERT INTO Investor (name, email) VALUES (?, ?)";
    const result = await db.query(query, [name, email]);
    return { id: result.insertId, name, email };
  }

  async delete(id) {
    const query = "DELETE FROM Investor WHERE id = ?";
    const result = await db.query(query, [id]);
    return result.affectedRows;
  }

  async deleteInvestmentsByInvestor(investor_id) {
    const query = "DELETE FROM InvestmentHistory WHERE investor_id = ?";
    const result = await db.query(query, [investor_id]);
    return result.affectedRows;
  }
}

module.exports = new InvestorRepository();
