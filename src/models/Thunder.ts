import mongoose from "mongoose";
import { ThunderInfo } from "../interfaces/thunder/ThunderInfo";

const moment = require('moment-timezone');
moment.tz("Asia/Seoul");



const ThunderSchema = new mongoose.Schema( {
    writerId: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    },
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    hashtags: {
        type: [Number],
        minlength: 1,
        maxlength: 4,
        required: true
    },
    limitPlayerCount: {
        type: Number,
        minlength: 1,
        required: true
    },
    meetDate: {
        type: String,
        required: true
    },
    meetTime: {
        type: String,
        required: true
    },
    content: {
        type: String,
        maxlength: 150
    },
    createdAt: {
        type: Date,
        required: true,
        default: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    updatedAt: {
        type: Date,
        required: true,
        default: moment().format("YYYY-MM-DD HH:mm:ss")
    }
});


export default mongoose.model< ThunderInfo & mongoose.Document>("Thunder",  ThunderSchema);