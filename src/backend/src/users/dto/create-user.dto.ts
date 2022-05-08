import {IsString, Min} from "class-validator";

export class CreateUserDto {

    @IsString()
    @Min(5)
    firstName: string

    @IsString()
    @Min(5)
    lastName: string

}
