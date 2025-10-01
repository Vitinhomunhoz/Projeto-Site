const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// rota de teste
app.get("/api/ping", (req, res) => {
  res.json({ ok: true, msg: "pong" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
