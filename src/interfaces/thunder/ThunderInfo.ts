/* 게시글(번개) 데이터 모델 */

import { UserInfo } from "../user/UserInfo";


export interface ThunderInfo {
    writerId: UserInfo; // 작성자 ID, 23.01.02시점에서는 임의로 이름이랑 id만 받음.
    title: String; // 게시글 제목
    hashtags: [Number]; // 해쉬태그 (int array)
    limitPlayerCount: Number; // 인원 제한
    meetDate: String; // 만나는 날짜
    meetTime: String; // 만나는 시간
    content: String; // 게시글 내용
    createdAt: Date; // 생성된 날짜
    updatedAt: Date; // 가장 최근에 수정된 날짜. 처음 생성 시에는 createdAt과 동일.
}