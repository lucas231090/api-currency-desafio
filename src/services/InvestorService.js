const InvestorRepository = require("../repositories/InvestorRepository");

class InvestorService {
  async createInvestor({ name, email }) {
    if (!name || !email) throw new Error("Nome e e-mail são obrigatórios.");

    const exists = await InvestorRepository.findByEmail(email);
    if (exists) throw new Error("Investidor com este e-mail já existe.");

    return await InvestorRepository.create({ name, email });
  }

  async deleteInvestor(id) {
    // Deleta investimentos vinculados
    await InvestorRepository.deleteInvestmentsByInvestor(id);
    // Deleta o investidor
    return await InvestorRepository.delete(id);
  }
}

module.exports = new InvestorService();
