import faker from 'faker';
import db from 'mongoose'

import model from './usersModel.js';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

db.Promise = global.Promise;
db.connect(`mongodb+srv://admin:${process.env.PASS}@cluster0.3bgp9.mongodb.net/test`, { useNewUrlParser: true, useUnifiedTopology: true })

export default class UsersService {
    constructor() {
        this.users = [];
    }

    async findAll(query) {
        const foundUsers = await model.find(query);
        return foundUsers;
    }

    async findById(id) {
        const foundUser = await model.findById(id);
        return foundUser;
    }

    create(user) {
        const newUser = new model(user);
        newUser.save();
        return newUser
    }

    async delete(id) {
        const foundUser = await model.findById(id);
        foundUser.remove();
        return {
            message: 'User deleted',
            user: foundUser
        };
    }

    async patch(id, user) {
        const foundUser = await model.findById(id);
        Object.assign(foundUser, user).save();
        return foundUser;
    }
}