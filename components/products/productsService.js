import faker from 'faker';
import db from 'mongoose'

// dotenv
import dotenv from 'dotenv';
dotenv.config();

import model from './productsModel.js';

db.Promise = global.Promise;
db.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.3bgp9.mongodb.net/test`, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

export default class ProductsService {
    async findAll(query) {
        const foundProducts = await model.find(query);
        return foundProducts;
    }

    async findById(id) {
        const foundProduct = await model.findById(id);
        return foundProduct;
    }

    create(product) {
        const newProduct = new model(product);
        newProduct.save();
        return {
            message: 'Product created',
            product: newProduct
        }
    }

    async delete(id) {
        const foundProduct = await model.findById(id);
        foundProduct.remove();
        return {
            message: 'Product deleted',
            product: foundProduct
        };
    }

    async patch(id, product) {
        const foundProduct = await model.findById(id);
        Object.assign(foundProduct, product).save();
        return {
            message: 'Product updated',
            product: foundProduct
        };
    }
}