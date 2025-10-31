const CurrencyService = require("../services/CurrencyService");

class CurrencyController {
  async index(req, res) {
    try {
      const currencies = await CurrencyService.listCurrencies();
      return res.status(200).json(currencies);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const newCurrency = await CurrencyService.createCurrency(req.body);
      return res.status(201).json(newCurrency);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new CurrencyController();
