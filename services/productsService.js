import faker from 'faker';

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

    findAll() {
        return this.products;
    }

    findById(id) {
        return this.products.find(product => product.id === id);
    }

    create(product) {
        this.products.push(product);
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
}