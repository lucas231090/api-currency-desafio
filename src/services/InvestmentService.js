const InvestmentRepository = require("../repositories/InvestmentRepository");

class InvestmentService {
  async createInvestment(data) {
    const {
      initial_amount,
      months,
      interest_rate,
      final_amount,
      currency_id,
      investor_id,
    } = data;
    if (
      !initial_amount ||
      !months ||
      !interest_rate ||
      !final_amount ||
      !currency_id ||
      !investor_id
    ) {
      throw new Error("Todos os campos do investimento são obrigatórios.");
    }
    return await InvestmentRepository.create(data);
  }
}

module.exports = new InvestmentService();
