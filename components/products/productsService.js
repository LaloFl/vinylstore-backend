import faker from 'faker';
import db from 'mongoose'

// dotenv
import dotenv from 'dotenv';
dotenv.config();

import productsModel from './productsModel.js';

db.Promise = global.Promise;
db.connect(
    `mongodb+srv://admin:${process.env.PASS}@cluster0.3bgp9.mongodb.net/test`, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

export default class ProductsService {
    constructor() {
        this.products = [];
        this.generate(4);
    }

    generate(count) {
        for(let i = 0; i < count; i++) { 
            this.products.push({
              id: faker.datatype.uuid(),
              name: faker.commerce.productName(),
              price: faker.commerce.price(),
              image: faker.image.imageUrl()
            });
        }
    }

    async findAll() {
        const foundMessages = await productsModel.find();
        return foundMessages;
    }

    findById(id) {
        return this.products.find(product => product.id === id);
    }

    create(product) {
        const newProduct = new productsModel(product);
        return newProduct.save();
    }

    delete(id) {
        const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
    }

    update(id, product) {
        const index = this.products.findIndex(p => p.id === id);
        this.products[index] = product;
        return this.products[index];
    }

    patch(id, product) {
        const index = this.products.findIndex(p => p.id === id);
        this.products[index] = {
            ...this.products[index],
            ...product
        };
        return this.products[index];
    }
}