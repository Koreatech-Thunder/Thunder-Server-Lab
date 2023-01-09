import statusCode from '../modules/statusCode';
import util from "../modules/util";
import message  from "../modules/responseMessage";


import { ThunderCreateDto } from "../interfaces/thunder/ThunderCreateDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ThunderService } from "../services";
import { ThunderResponseDto } from '../interfaces/thunder/ThunderResponseDto';


import { Request, Response } from "express";


const createThunder = async (req: Request, res: Response): Promise<void> => {
    const thunderCreateDto: ThunderCreateDto = req.body;

    try {
        const data: PostBaseResponseDto = await ThunderService.createThunder(thunderCreateDto);

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_THUNDER_SUCCESS, data));

    }
    catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const getThunderList = async (req: Request, res: Response): Promise<void> => {

    try {
        const data: ThunderResponseDto[] | null = await ThunderService.getThunderList();

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_THUNDER_SUCCESS, data));

    }
    catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const getThunder = async (req: Request, res: Response): Promise<void> => {
    const { postId } = req.params;

    try {
        const data: ThunderResponseDto | null = await ThunderService.getThunder(postId);

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_THUNDER_SUCCESS, data));

    }
    catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createThunder,
    getThunderList,
    getThunder
}