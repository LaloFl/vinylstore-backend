import faker from 'faker';
import db from 'mongoose'

import usersModel from './usersModel.js';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

db.connect(`mongodb+srv://admin:${process.env.PASS}@cluster0.3bgp9.mongodb.net/test`, { useNewUrlParser: true, useUnifiedTopology: true })


export default class UsersService {
    constructor() {
        this.users = [];
    }

    async findAll() {
        const users = await usersModel.find();
        return users;
    }

    findOne(id) {
        return this.users.find(user => user.id === id);
    }

    create(user) {
        const newUser = new usersModel(user);
        return newUser.save();
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