import { Schema } from "mongoose";


const UserSiginModel = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
        default: "Not available"
    }
});

export { UserSiginModel };
