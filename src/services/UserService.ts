import { UserCreateDto } from '../interfaces/user/UserCreateDto';
import { UserUpdateDto } from '../interfaces/user/UserUpdateDto';
import { UserResponseDto } from '../interfaces/user/UserResponseDto';
import User from '../models/User';


const createUser = async (userCreateDto: UserCreateDto) => {
    try {
        const user = new User({
            id: userCreateDto.id,
            name: userCreateDto.name,
            introduction: userCreateDto.introduction,
            manner: userCreateDto.manner,
            hashtags: userCreateDto.hashtags
        });

        await user.save();
        const data = {
            _id: user._id
        };

        return data;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
    try {
        const updatedUser = {
            id: userUpdateDto.id,
            name: userUpdateDto.name,
            introduction: userUpdateDto.introduction,
            manner: userUpdateDto.manner,
            hashtags: userUpdateDto.hashtags
        }

        await User.findByIdAndUpdate(userId, updatedUser);

    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}

const findUserById = async (userId: string) => {
    try {
        const user: UserResponseDto | null = await User.findById(userId);

        return user;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}

const findUserList = async () => {
    try {
        const users: UserResponseDto[] | null = await User.find();

        return users;
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}

const deleteUser = async (userId: string) => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error)
    {
        console.log(error);
        throw(error);
    };
}



export default {
    createUser,
    updateUser,
    findUserById,
    findUserList,
    deleteUser
}