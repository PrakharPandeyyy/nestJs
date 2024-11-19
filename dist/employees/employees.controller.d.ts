import { EmployeesService } from './employees.service';
import { Prisma } from '@prisma/client';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: Prisma.EmployeeCreateInput): string;
    findAll(role?: 'ADMIN' | 'ENGINEER'): string;
    findOne(id: string): string;
    update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput): string;
    remove(id: string): string;
}
