const { getAllUsers, getUserById, login, generateToken, createUser } = require('./src/services/user');
const { getAllProducts, getProductById } = require('./src/services/product');

const { ADMIN } = require('./src/constant/role');
const { verifyToken, checkRole, checkOwnership} = require('./src/common/auth');
const { validate } = require('./src/common/validation');
const { addUserSchema, loginSchema } = require('./src/common/schema-validation');

module.exports = function (app) {
	
    app.get('/users', [verifyToken, checkRole(ADMIN)], async (req, res) => {
        try {
          const users = await getAllUsers();
          return res.status(200).json(users);
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      });
      
      app.get('/users/:id', [verifyToken, checkOwnership(ADMIN)], async (req, res) => {
        try {
          const user = await getUserById(req.params.id);
          if (!user) {
            return res.status(404).json({ error: 'User not found'});
          }
          return res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });

      app.post('/users', validate(addUserSchema), async (req, res) => {
        try {
            const user = await createUser(req.body);

            if (user.status === 201) {
                user.token = generateToken(user);
                return res.status(201).json(user);
            }
            else if (user.status === 400) {
                return res.status(400).json({ error: user.error });
            }
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
      });

      app.get('/products', [verifyToken], async (req, res) => {
        try {
          const products = await getAllProducts();
          return res.status(200).json(products);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
      
      app.get('/products/:id', [verifyToken], async (req, res) => {
        try {
          const product = await getProductById(req.params.id);
          if (!product) {
            return res.status(404).json({ error: 'Product not found'});
          }
          return res.status(200).json(product);
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      });

      app.post('/login',validate(loginSchema), async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await login(username, password);
        if (user !== null) {
          user.token = generateToken(user);
          return res.status(200).json(user);
        }
        else {
          return res.status(400).json({ error: 'Invalid input data, account does not exist' });
        }
      });
}