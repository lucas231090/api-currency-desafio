const InvestorService = require("../services/InvestorService");

class InvestorController {
  async store(req, res) {
    try {
      const investor = await InvestorService.createInvestor(req.body);
      return res.status(201).json(investor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const deleted = await InvestorService.deleteInvestor(id);
      return res.status(200).json({ deleted });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new InvestorController();
