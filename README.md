# API de Cadastro e Login com JWT

API RESTful desenvolvida em **Node.JS** e **Express.js**, com autenticação baseada em **JWT** e integração com **MySLQ**.
O objetivo deste projeto é fornecer um fluxo seguro de cadastro e autenticação de usuários.

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Qual problema a API resolve?](#qual-problema-a-api-resolve)
3. [Funcionalidades](#funcionalidades)
4. [Tecnologias](#tecnologias)
5. [Instalação](#instalação)
6. [Endpoints](#endpoints)

---

## Visão Geral

Este projeto implementa um sistema de **cadastro e login de usuários**, utilizando **boas práticas de arquitetura MVC** e **validações de dados**.

---

## Funcionalidades

- [x] Cadastro de usuários
- [x] Validação de senha forte e formato de e-mail
- [x] Criptografia de senha com **bcrypt**
- [x] Persistência de dados no **MySQL**
- [x] Login com geração de **JWT**
- [x] Middleware de autenticação
- [x] Rotas protegidas por token
- [ ] Rota de logout **remover/invalidar tokens**

---

## Qual problema a API resolve?

A API oferece uma **solução para sistemas web** que necessitam de **cadastro e login de clientes**, garantindo um acesso **seguro, confiável e escalável** para os usuários.

---

## Tecnologias

- **Node.js**
  - **npm (dependências)**
    - Express.js
    - bcrypt
    - jsonwebtoken
    - dotenv
    - mysql2
  - **devDependencies**
    - nodemon
- **Banco de dados**
  - MySQL
- **Ferramentas de teste**
  - Postman

---

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

```bash
# 1. Clone o repositório
git clone https://github.com/Hypeeer/Sistema-de-cadastro-e-login-usando-JWT.git

# 2. Entre no diretório do projeto
cd Sistema-de-cadastro-e-login-usando-JWT

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.example .env
# ⚠️ Edite o arquivo .env com suas credenciais do MySQL

# 5. Crie o banco de dados no MySQL
# Exemplo:
# CREATE DATABASE nome_do_banco;

# 6. Inicie a aplicação
npm start
```

---

## Endpoints

### Criar usuário

**POST** `/api/users/register`

**Body (JSON):**

```json
{
  "name": "João",
  "email": "joao@email.com",
  "password": "SenhaForte123!"
}
```

### Login

**POST** `/api/users/login`

**Body (JSON):**

```json
{
  "email": "joao@email.com",
  "password": "SenhaForte123!"
}
```

**Resposta de sucesso:**

```json
{
  "token": "jwt_token_aqui"
}
```
