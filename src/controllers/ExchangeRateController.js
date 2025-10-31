const ExchangeRateService = require("../services/ExchangeRateService");

class ExchangeRateController {
  async store(req, res) {
    try {
      const rate = await ExchangeRateService.createExchangeRate(req.body);
      return res.status(201).json(rate);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async index(req, res) {
    try {
      const recentRates = await ExchangeRateService.listRecentExchangeRates();
      return res.status(200).json(recentRates);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await ExchangeRateService.updateExchangeRate(
        id,
        req.body
      );
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroyOld(req, res) {
    try {
      const deleted = await ExchangeRateService.deleteOldExchangeRates();
      return res.status(200).json({ deleted });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ExchangeRateController();
