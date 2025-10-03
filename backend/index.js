

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db"); 

connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API online. Use as rotas da sua aplicação.");
});

app.get("/api/ping", (req, res) => {
  res.json({ ok: true, msg: "pong" });
});

app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));

