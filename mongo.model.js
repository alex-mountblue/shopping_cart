const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const connection = MongoClient.connect(url, { useNewUrlParser: true });

let client;

const connect = async () => {
  try {
    client = await connection;
    console.log('connected');
  } catch (err) {
    console.log('Error connecting to Mongo');
    console.error(err);
  }
};
connect();

module.exports.addToCart = async (item) => {
  const doc = await client.db('shop').collection('cart').findOneAndUpdate(
    { name: 'cart' },
    {
      $push: {
        items: item
      }
    },
    {
      projection: { _id: 0 },
      upsert: true,
      returnOriginal: false
    }
  );

  return doc;
};

module.exports.updateCart = async (name, qty) => {
  const doc = await client.db('shop').collection('cart').findOneAndUpdate(
    { name: 'cart' },
    {
      $inc: {
        'items.$[element].quantity': qty
      }
    },
    {
      arrayFilters: [{
        'element.name': { $eq: name }
      }],
      projection: { _id: 0 },
      upsert: true,
      returnOriginal: false
    },
  );

  return doc;
};

module.exports.removeItem = async (name) => {
  const doc = await client.db('shop').collection('cart').findOneAndUpdate(
    { name: 'cart' },
    {
      $pull: {
        items: {
          name
        }
      }
    },
    {
      projection: { _id: 0 },
      returnOriginal: false
    }
  );

  return doc;
};

module.exports.viewCart = async () => {
  const doc = await client.db('shop')
    .collection('cart')
    .find({ name: 'cart' }, { projection: { _id: 0 } })
    .toArray();

  return doc;
};
