const db = require("../models/ConnectDatabase");

class ExchangeRateRepository {
  async findRecent() {
    const query = `
      SELECT er.id, er.date, er.daily_variation, er.daily_rate, 
             c.name AS currency_name, c.type AS currency_type
      FROM ExchangeRate er
      JOIN Currency c ON er.currency_id = c.id
      WHERE er.date >= CURDATE() - INTERVAL 7 DAY
      ORDER BY er.date DESC
    `;
    return await db.query(query);
  }

  async create({ date, daily_variation, daily_rate, currency_id }) {
    const query = `
      INSERT INTO ExchangeRate (date, daily_variation, daily_rate, currency_id)
      VALUES (?, ?, ?, ?)
    `;
    const result = await db.query(query, [
      date,
      daily_variation,
      daily_rate,
      currency_id,
    ]);
    return {
      id: result.insertId,
      date,
      daily_variation,
      daily_rate,
      currency_id,
    };
  }

  async update(id, { daily_variation, daily_rate, currency_id }) {
    const query = `
      UPDATE ExchangeRate
      SET daily_variation = ?, daily_rate = ?, currency_id = ?
      WHERE id = ?
    `;
    await db.query(query, [daily_variation, daily_rate, currency_id, id]);
    return { id, daily_variation, daily_rate, currency_id };
  }

  async deleteOld() {
    const query =
      "DELETE FROM ExchangeRate WHERE date < CURDATE() - INTERVAL 30 DAY";
    const result = await db.query(query);
    return result.affectedRows;
  }
}

module.exports = new ExchangeRateRepository();
