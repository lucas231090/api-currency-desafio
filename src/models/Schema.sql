DROP DATABASE IF EXISTS exchange_investments;

CREATE DATABASE IF NOT EXISTS exchange_investments CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE exchange_investments;

-- Tabela de Moedas
CREATE TABLE Currency (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(10) NOT NULL
);

-- Tabela de Taxas de Câmbio
CREATE TABLE ExchangeRate (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    daily_variation FLOAT NOT NULL,
    daily_rate FLOAT NOT NULL,
    currency_id INT NOT NULL,
    FOREIGN KEY (currency_id) REFERENCES Currency(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Tabela de Investidores
CREATE TABLE Investor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela de Histórico de Investimentos
CREATE TABLE InvestmentHistory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    initial_amount FLOAT NOT NULL,
    months INT NOT NULL,
    interest_rate FLOAT NOT NULL,
    final_amount FLOAT NOT NULL,
    currency_id INT NOT NULL,
    investor_id INT NOT NULL,
    FOREIGN KEY (currency_id) REFERENCES Currency(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (investor_id) REFERENCES Investor(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ========================
-- INSERÇÕES PRÉ-CADASTRADAS
-- ========================

-- Moedas
INSERT INTO Currency (name, type) VALUES
('Dólar Americano', 'USD'),
('Euro', 'EUR'),
('Real Brasileiro', 'BRL');

-- Taxas de Câmbio (últimos 7 dias)
INSERT INTO ExchangeRate (date, daily_variation, daily_rate, currency_id) VALUES
(CURDATE() - INTERVAL 6 DAY, 0.3, 5.20, 1),
(CURDATE() - INTERVAL 5 DAY, -0.2, 5.18, 1),
(CURDATE() - INTERVAL 4 DAY, 0.1, 5.19, 1),
(CURDATE() - INTERVAL 3 DAY, 0.0, 5.19, 1),
(CURDATE() - INTERVAL 2 DAY, 0.2, 5.20, 1),
(CURDATE() - INTERVAL 1 DAY, -0.1, 5.19, 1),
(CURDATE(), 0.4, 5.21, 1),

(CURDATE() - INTERVAL 6 DAY, 0.1, 5.50, 2),
(CURDATE() - INTERVAL 5 DAY, -0.1, 5.49, 2),
(CURDATE() - INTERVAL 4 DAY, 0.2, 5.50, 2),
(CURDATE() - INTERVAL 3 DAY, 0.0, 5.50, 2),
(CURDATE() - INTERVAL 2 DAY, -0.2, 5.49, 2),
(CURDATE() - INTERVAL 1 DAY, 0.1, 5.50, 2),
(CURDATE(), 0.0, 5.50, 2),

(CURDATE() - INTERVAL 6 DAY, 0.0, 1.00, 3),
(CURDATE() - INTERVAL 5 DAY, 0.0, 1.00, 3),
(CURDATE() - INTERVAL 4 DAY, 0.0, 1.00, 3),
(CURDATE() - INTERVAL 3 DAY, 0.0, 1.00, 3),
(CURDATE() - INTERVAL 2 DAY, 0.0, 1.00, 3),
(CURDATE() - INTERVAL 1 DAY, 0.0, 1.00, 3),
(CURDATE(), 0.0, 1.00, 3);

-- Investidores
INSERT INTO Investor (name, email) VALUES
('Lucas Jose', 'proflucas@email.com'),
('Fred', 'fred@email.com');

-- Investimentos
INSERT INTO InvestmentHistory (initial_amount, months, interest_rate, final_amount, currency_id, investor_id) VALUES
(10000, 12, 5.5, 10550, 1, 1),
(5000, 6, 4.0, 5100, 2, 2),
(20000, 24, 6.0, 22560, 1, 2),
(15000, 12, 5.0, 15750, 3, 1);
