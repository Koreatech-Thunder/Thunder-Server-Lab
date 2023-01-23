import { ThunderCreateDto } from '../interfaces/thunder/ThunderCreateDto';
import Thunder from "../models/Thunder";
import { ThunderResponseDto } from '../interfaces/thunder/ThunderResponseDto';


const createThunder = async (thunderCreateDto: ThunderCreateDto) => {
    try {
        const thunder = new Thunder({
            writerId: thunderCreateDto.writerId,
            title: thunderCreateDto.title,
            hashtags: thunderCreateDto.hashtags,
            limitPlayerCount: thunderCreateDto.limitPlayerCount,
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

const getThunderList = async () => {
    try {
        const thunders: ThunderResponseDto[] | null = await Thunder.find();

        return thunders;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}

const getThunder = async (postId: string) => {
    try {
        const thunder: ThunderResponseDto | null = await Thunder.findById(postId);

        return thunder;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}


const getThunderByHashtags = async (tag: string) => {
    try {
        const thunder: ThunderResponseDto[] | null = await Thunder.find({hashtags: tag});

        return thunder;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}



export default {
    createThunder,
    getThunderList,
    getThunder,
    getThunderByHashtags
}