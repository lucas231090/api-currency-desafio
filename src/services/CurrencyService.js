const CurrencyRepository = require("../repositories/CurrencyRepository");

class CurrencyService {
  async listCurrencies() {
    return await CurrencyRepository.findAll();
  }

  async createCurrency(data) {
    if (!data.name || !data.type) {
      throw new Error("Campos 'name' e 'type' são obrigatórios.");
    }
    return await CurrencyRepository.create(data);
  }
}

module.exports = new CurrencyService();
