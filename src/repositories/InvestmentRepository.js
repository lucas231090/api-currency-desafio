const db = require("../models/ConnectDatabase");

class InvestmentRepository {
  async create({
    initial_amount,
    months,
    interest_rate,
    final_amount,
    currency_id,
    investor_id,
  }) {
    const query = `
      INSERT INTO InvestmentHistory (initial_amount, months, interest_rate, final_amount, currency_id, investor_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const result = await db.query(query, [
      initial_amount,
      months,
      interest_rate,
      final_amount,
      currency_id,
      investor_id,
    ]);
    return {
      id: result.insertId,
      initial_amount,
      months,
      interest_rate,
      final_amount,
      currency_id,
      investor_id,
    };
  }
}

module.exports = new InvestmentRepository();
