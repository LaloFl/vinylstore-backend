import model from './usersModel.js';

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
        return {
            message: 'User created',
            user: newUser
        }
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
        return {
            message: 'User updated',
            user: foundUser
        };
    }
}  