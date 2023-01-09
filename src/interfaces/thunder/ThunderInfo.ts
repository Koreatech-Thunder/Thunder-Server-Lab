/* 게시글(번개) 데이터 모델 */

import { UserInfo } from "../user/UserInfo";


export interface ThunderInfo {
    writerId: UserInfo; // 작성자 ID == 방장
    title: String; // 게시글 제목
    hashtags: [Number]; // 해쉬태그 (int array)
    limitPlayerCount: Number; // 인원 제한
    meetTime: String;
    content: String; // 게시글 내용
    createdAt: Date; // 생성된 날짜
    updatedAt: Date; // 가장 최근에 수정된 날짜. 처음 생성 시에는 createdAt과 동일.
}