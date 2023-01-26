export interface UserCreateDto {
    name: String;
    introduction?: String;
    manner: Number;
    hashtags?: [Number];
}