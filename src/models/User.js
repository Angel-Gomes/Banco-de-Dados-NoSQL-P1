const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const User = mongoose.model('User', userSchema);

// Função para criar um novo usuário
async function createUser(userData) {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw error;
    }
}

// Função para encontrar um usuário por ID
async function findUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

// Função para atualizar um usuário
async function updateUser(userId, newData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

// Função para excluir um usuário
async function deleteUser(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    findUserById,
    updateUser,
    deleteUser
};
