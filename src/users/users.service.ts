/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Prakhar Pandey',
      email: 'p@p.com',
      role: 'Engineer',
    },
    {
      id: 2,
      name: 'Prakhar Pandey',
      email: 'pp@p.com',
      role: 'ADMIN',
    },
  ];
  findAll(role?: 'ENGINEER' | 'ADMIN') {
    if (role) {
        const rolesArray=this.users.filter((users) => users.role == role);
        if(!rolesArray.length)throw new NotFoundException('User role not found')
            return rolesArray
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if(!user) throw new NotFoundException('user Not Found')
    return user;
  }
  create(user: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(
    id: number,
    updatedUser: UpdateUserDto,
  ) {
    this.users = this.users.map((users) => {
      if (users.id === id) {
        return { ...users, ...updatedUser };
      }
      return users;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
