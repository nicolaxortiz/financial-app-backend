--Create table for user information
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    document VARCHAR(20) UNIQUE NOT NULL,
    birth_date DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_validate BOOLEAN DEFAULT false
);


-- Create table for authentication codes
CREATE TABLE codes (
    id SERIAL PRIMARY KEY,
    code VARCHAR(6) NOT NULL,
    id_user INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

-- Create table for accounts information
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    earnings BIGINT DEFAULT 0,
    expenses BIGINT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_user INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

-- Create table for moves information
CREATE TABLE moves (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    amount INTEGER NOT NULL,
    date TIMESTAMP NOT NULL,
    type VARCHAR(20) NOT NULL,
    id_account INT NOT NULL,
    CONSTRAINT fk_account FOREIGN KEY (id_account) REFERENCES accounts(id) ON DELETE CASCADE
);