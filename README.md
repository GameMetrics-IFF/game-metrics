# 🎮 GameMetrics

Sistema web para **análise de desempenho de jogadores**, permitindo cadastro, autenticação e gerenciamento de pontuações.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Frontend

* React + Vite
* TypeScript
* Tailwind CSS
* React Router

### 🔹 Backend

* Node.js
* Express
* MySQL
* JWT (autenticação)
* bcryptjs (criptografia)

### 🔹 Deploy

* Frontend: Vercel
* Backend + Banco: Railway

---

## 📌 Funcionalidades

* ✅ Cadastro de usuários (Signup)
* ✅ Proteção de rotas
* ✅ Integração com banco de dados MySQL
* ✅ Interface responsiva

---

## 🗄️ Estrutura do Projeto

```
game-metrics/
│
├── gamemetrics-frontend/   # Aplicação React
├── gamemetrics-backend/    # API Node.js
└── README.md
```

---

## ⚙️ Como rodar o projeto localmente

### 🔹 Backend

```bash
cd gamemetrics-backend
npm install
node server.js
```

Crie um arquivo `.env`:

```env
MYSQLHOST=localhost
MYSQLUSER=root
MYSQLPASSWORD=1234
MYSQLDATABASE=gamemetrics
MYSQLPORT=3306
JWT_SECRET=secret
```

---

### 🔹 Frontend

```bash
cd gamemetrics-frontend
npm install
npm run dev
```

---

## 🌐 Deploy

* Backend hospedado no Railway
* Frontend hospedado na Vercel

---

## 🔐 Autenticação

* Senhas criptografadas com bcrypt
* Token JWT para autenticação
* Rotas protegidas no frontend

---

## 📷 Preview

Interface com foco em análise de desempenho, experiência moderna e responsividade.
<img width="2444" height="8788" alt="game-metrics vercel app_" src="https://github.com/user-attachments/assets/c0788a68-d114-4d44-9858-83292f5fb41a" />

* Tela de login
<img width="2444" height="1820" alt="game-metrics vercel app_ (1)" src="https://github.com/user-attachments/assets/799ea7d0-7436-46ab-9c51-e853087475d6" />

* Tela de cadastro
<img width="2444" height="1928" alt="game-metrics vercel app_ (2)" src="https://github.com/user-attachments/assets/3bb94f8b-4559-4c97-aa75-e6197783fa7a" />

---

## 📌 Melhorias futuras

* 🔄 Relacionar usuários com jogadores
* 📊 Dashboard com gráficos
* 🏆 Sistema de ranking
* 🔔 Notificações
* 🔐 Refresh token

---

## 👨‍💻 Autores

Desenvolvido por Rafael Viana, Carlos Felipe Ribeirom, Jackson Machado e Kauan Toledo

---
