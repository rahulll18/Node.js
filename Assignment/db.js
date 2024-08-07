const mongoose = require('mongoose');
require('dotenv').config();

const mongoDb = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("MongoDb Databse Connected")
        // insertAllProduct();
        //countProductsInStock();
        // checkProductExists(120);
        findProductsInPriceRange(1000,1500)
        //deleteMultipleProducts({ category: 'supplement' });
    })
    .catch(err => console.log("error is :-",err.message))
}

module.exports = mongoDb;


const productschema = new mongoose.Schema({
    _id : Number,
    category:String,
    productName : String,
    price : Number,
    inStock : Boolean,
})

const productModel = mongoose.model("Product", productschema);

const products = [{
    _id: 101,
    category: "Shirt",
    productName : "full oversized shirt",
    price : 300,
    inStock : true
},{
    _id: 102,
    category: "track pant",
    productName : "flexible track",
    price : 900,
    inStock : false
},{
    _id: 103,
    category: "supplement",
    productName : "whey protien",
    price : 1300,
    inStock : true
},{
    _id: 104,
    category: "dumbels",
    productName : "pair dumbels",
    price : 1500,
    inStock : false
},{
    _id: 105,
    category: "shorts",
    productName : "faurak short",
    price : 1700,
    inStock : true
}]

const insertAllProduct = async ()=> {
    try{
        const data = await productModel.insertMany(products);
        console.log(data)
    }catch(err){
        console.log("error while inserting products :" , err.message)
    } 
}

const countProductsInStock = async () => {
    try {
      const count = await productModel.countDocuments({ inStock: true });
      console.log(`Number of products in stock: ${count}`);
    } catch (err) {
      console.log('Error counting products in stock:', err.message);
    }
  }

  const checkProductExists = async (id) => {
    try {
      const product = await productModel.findById(id);
      if (product) {
        console.log(`Product with ID ${id} exists.`);
        return true;
      } else {
        console.log(`Product with ID ${id} does not exist.`);
        return false;
      }
    } catch (err) {
      console.log(`Error checking product existence with ID ${id}:`, err.message);
      return false;
    }
  }


  const findProductsInPriceRange = async (minPrice, maxPrice) => {
    try {
      const products = await productModel.find({
        price: { $gte: minPrice, $lte: maxPrice }
      });
      console.log(`Products with price between ${minPrice} and ${maxPrice}:`, products);
    } catch (err) {
      console.log('Error finding products in price range:', err.message);
    }
  }

  const deleteMultipleProducts = async (filter) => {
    try {
      const result = await productModel.deleteMany(filter);
      console.log('Deleted Multiple Products:', result);
    } catch (err) {
      console.log('Error deleting multiple products:', err.message);
    }
  }
  

