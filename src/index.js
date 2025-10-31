const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./models/ConnectDatabase");

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Testa a conexão com o banco
db.testConnection().catch((err) => {
  console.error("Não foi possível conectar ao banco de dados:", err);
  process.exit(1);
});

// Rotas
app.use(routes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
