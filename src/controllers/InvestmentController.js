const InvestmentService = require("../services/InvestmentService");

class InvestmentController {
  async store(req, res) {
    try {
      const investment = await InvestmentService.createInvestment(req.body);
      return res.status(201).json(investment);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new InvestmentController();
