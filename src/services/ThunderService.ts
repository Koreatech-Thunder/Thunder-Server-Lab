import { ThunderCreateDto } from '../interfaces/thunder/ThunderCreateDto';
import User from '../models/User';
import Thunder from "../models/Thunder";


const createThunder = async (thunderCreateDto: ThunderCreateDto) => {
    try {
        const thunder = new Thunder({
            writerId: thunderCreateDto.writerId,
            title: thunderCreateDto.title,
            hashtags: thunderCreateDto.hashtags,
            limitPlayerCount: thunderCreateDto.limitPlayerCount,
            meetDate: thunderCreateDto.meetDate,
            meetTime: thunderCreateDto.meetTime,
            content: thunderCreateDto.content,
            createdAt: thunderCreateDto.createdAt,
            updatedAt: thunderCreateDto.updatedAt
        });

        await thunder.save();
        const data = {
            _id: thunder._id
        };

        return data;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}



export default {
    createThunder
}