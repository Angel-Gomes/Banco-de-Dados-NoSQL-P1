const userRepository = require('../repositories/userRepository');

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userRepository.createUser(username, password);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userRepository.getUserByUsername(username);
        if (!user || user.password !== password) {
            res.status(401).json({ error: 'Invalid credentials' });
        } else {
            res.json({ message: 'Login successful', user });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
