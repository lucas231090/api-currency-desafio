# Desafio Giro API

API RESTful desenvolvida em Node.js com Express e MySQL, para gerenciamento de moedas, taxas de câmbio, investidores e histórico de investimentos.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Nodemon
- Insomnia/Postman
- Arquitetura Controller → Service → Repository

## Estrutura do Projeto

desafio-giro/

├── src/

│ ├── controllers/

│ ├── services/

│ ├── repositories/

│ ├── routes/

│ └── index.js

└── package.json

## Instalação e Configuração

1. Clone o repositório:

```bash
git clone <repo_url>
cd desafio-giro
```

2. Instale as dependências:

```bash
npm install express mysql2 nodemon cors
```

3. Configure o banco de dados MySQL:

- Execute `exchange_investments_seed.sql` para criar o banco e inserir dados.
- Ajuste credenciais em `src/models/ConnectDatabase.js`.

4. Rodando a API:

- Desenvolvimento (reload automático):

```bash
npm run dev
```

- Produção:

```bash
npm start
```

## Endpoints

### Moedas (Currency)

- GET /currencies → Lista todas as moedas
- POST /currencies → Cria uma nova moeda

### Taxas de Câmbio (ExchangeRate)

- GET /exchange-rates/recent → Últimos 7 dias de taxas
- POST /exchange-rates → Cria nova taxa
- PUT /exchange-rates/:id → Atualiza taxa existente
- DELETE /exchange-rates/old → Remove taxas >30 dias

### Investidores (Investor)

- POST /investors → Cria novo investidor (email único)
- DELETE /investors/:id → Remove investidor e investimentos vinculados

### Investimentos (InvestmentHistory)

- POST /investments → Cria novo investimento

## Scripts no package.json

\`\`\`json
"scripts": {
"start": "node src/index.js",
"dev": "nodemon src/index.js"
}
\`\`\`

## Testando a API

- Use Postman ou Insomnia.
- Importe a coleção: `postman_collection.json`.

## Observações

- Arquitetura Controller → Service → Repository.
- Validações feitas nos Services.
- Foreign keys com cascata garantem consistência do banco.

## Licença

MIT
