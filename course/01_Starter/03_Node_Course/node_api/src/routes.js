const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// Primeira rota
// module.exports = routes.get('/products', (req, res) => {
//     // Product.create({
//     //   title: 'React Native',
//     //   description: 'Build native apps with React',
//     //   url: 'http://github.com/facebook/react-native',
//     // });
//     res.send('Hello');
//   });
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
