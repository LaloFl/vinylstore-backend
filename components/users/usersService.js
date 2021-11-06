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

    async findAll() {
        const foundUsers = await model.find();
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

    update(id, user) {
        const index = this.users.findIndex(u => u.id === id);
        this.users[index] = user;
        return user;
    }

    delete(id) {
        const index = this.users.findIndex(u => u.id === id);
        this.users.splice(index, 1);
    }

    patch(id, user) {
        const index = this.users.findIndex(u => u.id === id);
        this.users[index] = { 
            ...this.users[index], 
            ...user 
        };
        return this.users[index];
    }
}