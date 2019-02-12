const router = require('express').Router();

const {
  viewCart,
  addToCart,
  updateCart,
  removeItem
} = require('./mongo.model');

module.exports = router;

router.get('/cart', async (req, res) => {
  const [doc] = await viewCart();
  console.log(doc);
  res.json(doc.items);
  // res.send('Hello from Cart');
});

router.post('/cart', async (req, res, next) => {
  console.log(req.body);
  const payload = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price
  };

  try {
    const doc = await addToCart(payload);
    console.log(doc);
    res.json(doc.value);
  } catch (err) {
    next(err);
  }
});

router.put('/cart', async (req, res, next) => {
  console.log(req.body);

  try {
    const doc = await updateCart(req.body.name, req.body.quantity);
    console.log(doc);
    res.json(doc.value);
  } catch (err) {
    next(err);
  }
});

router.delete('/cart', async (req, res, next) => {
  console.log('delete', req.body);
  try {
    const doc = await removeItem(req.body.name);
    console.log(doc);
    res.json(doc.value.items);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    res.status(500).end();
  }
  next();
});
