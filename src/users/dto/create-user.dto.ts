/* eslint-disable prettier/prettier */
export class CreateUserDto{
    name:string;
    email:string;
    role:"ENGINEER"|"ADMIN";
}