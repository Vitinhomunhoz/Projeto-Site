
const User = require('../models/User');

/**
 * @desc   
 * @route  
 * @access 
 */
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Por favor, forneça nome, email e senha.' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Este email já está em uso.' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: 'Dados de usuário inválidos.' });
    }
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` });
  }
};

/**
 * @desc    
 * @route   
 * @access  
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` });
  }
};

/**
 * @desc    
 * @route  
 * @access  
 */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` });
  }
};

/**
 * @desc   
 * @route   
 * @access  
 */
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save(); 

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` });
  }
};

/**
 * @desc    Deleta um usuário.
 * @route   DELETE /api/users/:id
 * @access  Público
 */
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.deleteOne();
      res.status(200).json({ message: 'Usuário removido com sucesso.' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error.message}` });
  }
};


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};