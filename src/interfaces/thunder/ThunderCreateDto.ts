import { UserInfo } from "../user/UserInfo";

export interface ThunderCreateDto {
    writerId: UserInfo;
    title: String;
    hashtags: [Number];
    limitPlayerCount: Number;
    meetDate: String;
    meetTime: String;
    content?: String; // 글 내용은 안 써도 상관없도록 함.
    createdAt: Date;
    updatedAt: Date;
}