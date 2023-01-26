import { UserInfo } from "../user/UserInfo";

export interface ThunderCreateDto {
    writerId: UserInfo;
    title: String;
    hashtags: [Number];
    limitPlayerCount: Number;
    meetTime: String;
    content?: String; // 글 내용은 안 써도 상관없도록 함.
    createdAt: Date; // 기본값으로 현재 시간 및 날짜 주어짐. 직접 작성할 필요 없음.
    updatedAt: Date; // 기본값으로 현재 시간 및 날짜 주어짐. 직접 작성할 필요 없음.
}