import { ConsoleLogger } from '@nestjs/common';
export declare class MyLoggerService extends ConsoleLogger {
    log(message: any, context?: string): void;
    error(message: any, stackOrContext?: string): void;
}
