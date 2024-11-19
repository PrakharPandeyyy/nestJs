/* eslint-disable prettier/prettier */
import { IsEmail , IsEnum , IsNotEmpty , IsString } from "class-validator";
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsEnum(["ENGINEER","ADMIN"],{
        message:'Valid Role required'
    })
    role:"ENGINEER"|"ADMIN";
}