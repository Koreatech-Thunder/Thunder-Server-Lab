export interface UserCreateDto {
    id: Number;
    name: String;
    introduction?: String;
    manner: Number;
    hashtags?: [Number];
}