const users = require("../models/User"); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ msg: "Usuário já cadastrado com este e-mail." });
    }

    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: users.length + 1,
      email,
      password: hashedPassword, 
    };

    users.push(newUser);
    res.status(201).json({ msg: "Usuário registrado com sucesso!", user: { id: newUser.id, email: newUser.email } });

  } catch (error) {
    res.status(500).json({ msg: "Ocorreu um erro no servidor.", error: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({ msg: "Credenciais inválidas." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Credenciais inválidas." });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || "seu_segredo_super_secreto", 
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        
        res.json({ token });
      }
    );

  } catch (error) {
    res.status(500).json({ msg: "Ocorreu um erro no servidor.", error: error.message });
  }
};