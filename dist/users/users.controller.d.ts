import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: 'ENGINEER' | 'ADMIN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(user: CreateUserDto): {
        name: string;
        email: string;
        role: "ENGINEER" | "ADMIN";
        id: number;
    };
    update(id: number, userUpdate: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
