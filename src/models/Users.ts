import { model, Schema } from "mongoose";
import User from "../interface/User";

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = model<User>('User', userSchema);

export default UserModel;