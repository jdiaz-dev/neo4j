import { IsEmail, IsString, IsNumber } from 'class-validator';

export class CreatePersonDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}
