const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// Libera o front em dev (Vite: 5173, CRA: 3000)
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// Rota de teste
app.get("/", (req, res) => {
  res.send("API online. Use /api/ping");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
