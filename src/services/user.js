const { getAllUsers, getUserById, getUserByUsername, createUser } = require('../repository/user')
const md5 = require("blueimp-md5");
const jwt = require("jsonwebtoken");

const fields = ['id', 'firstName', 'lastName', 'email', 'role'];
module.exports = {
    getAllUsers: async () => {
        return await getAllUsers(fields);
    },
    getUserById: async (id) => {
        return await getUserById(id, fields)
    },
    getUserByUsername: async (username, fields) => {
        return await getUserByUsername(username, fields)
    },
    login: async (username, password) => {
        const hashedPassword = md5(password);
        const user = await getUserByUsername(username, ['id', 'email', 'password']);
        if (user == null || user.password !== hashedPassword) {
            return null;
        }

        return { id: user.id, email: user.email };
    },
    generateToken: (user) => {
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.TOKEN_KEY,
            {
            expiresIn: "6h",
            }
        );
        return token;
    },
    createUser: async (user) => {
        if (await getUserByUsername(user.username)) {
            return { status: 400, error: "Duplicated username" }
        }
        user.password = md5(user.password);
        var createdUser = await createUser(user)
        return { status: 201, data: createdUser }
    }
}