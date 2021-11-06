import model from './productsModel.js';

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