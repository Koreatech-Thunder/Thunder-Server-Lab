import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const UserSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    introduction: {
        type: String
    },
    mannerTemperature: {
        type: Number,
        required: true,
        default: 36.5
    },
    hashtags: {
        type: [String]
    },
    isLogout: {
        type: Boolean
    }

});

UserSchema.plugin(autoIncrement.plugin, {
    model: "User",
    field: "id",
    startAt: 1,
    increment: 1
});


export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);