import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category : { type : String, required : true },
  subCategory : {type : String, required : true },
  sizes : {type : Number, required : true },
  bestseller : { type : Boolean },
  date : { type : Number, required : true }
}, {timestamps : true });

const Product = mongoose.model("Product", productSchema) || mongoose.models.Product;

export default Product;
