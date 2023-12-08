import mongoose from 'mongoose';
import { UserSiginModel } from '../Model/User.Sigin.Model.js';

const ConnectionDB = async (url) => {
    try {
        await mongoose.connect(url).then((e) => {
            if (e) {
                console.log(`DataBase.main.js  : connection sucessfully established`);
            }
        });
    } catch (error) {
        if (error) return console.log(`DataBase.main.js : Error`, error);
    }
}


const UserModel = mongoose.model('User', UserSiginModel);

export { ConnectionDB, UserModel };
