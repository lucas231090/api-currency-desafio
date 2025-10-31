const ExchangeRateRepository = require("../repositories/ExchangeRateRepository");

class ExchangeRateService {
  async listRecentExchangeRates() {
    return await ExchangeRateRepository.findRecent();
  }

  async createExchangeRate(data) {
    const { date, daily_variation, daily_rate, currency_id } = data;
    if (!date || daily_variation === undefined || !daily_rate || !currency_id) {
      throw new Error("Todos os campos são obrigatórios.");
    }
    return await ExchangeRateRepository.create(data);
  }

  async updateExchangeRate(id, data) {
    return await ExchangeRateRepository.update(id, data);
  }

  async deleteOldExchangeRates() {
    return await ExchangeRateRepository.deleteOld();
  }
}

module.exports = new ExchangeRateService();
