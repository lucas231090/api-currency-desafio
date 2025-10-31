const { Router } = require("express");
const CurrencyController = require("../controllers/CurrencyController");
const ExchangeRateController = require("../controllers/ExchangeRateController");
const InvestorController = require("../controllers/InvestorController");
const InvestmentController = require("../controllers/InvestmentController");

const routes = Router();

// Moedas
routes.get("/currencies", CurrencyController.index);
routes.post("/currencies", CurrencyController.store);

// Taxas de câmbio
routes.get("/exchange-rates/recent", ExchangeRateController.index);
routes.post("/exchange-rates", ExchangeRateController.store);
routes.put("/exchange-rates/:id", ExchangeRateController.update);
routes.delete("/exchange-rates/old", ExchangeRateController.destroyOld);

// Investidores
routes.post("/investors", InvestorController.store);
routes.delete("/investor/:id", InvestorController.destroy);

// Investimentos
routes.post("/investments", InvestmentController.store);

module.exports = routes;
