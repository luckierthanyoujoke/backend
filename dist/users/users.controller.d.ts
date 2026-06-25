import type { User } from '@prisma/client';
import { StorageService } from '../storage/storage.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    private readonly storage;
    constructor(usersService: UsersService, storage: StorageService);
    me(user: User | undefined): Promise<any>;
    uploadAvatar(user: User | undefined, file: Express.Multer.File | undefined): Promise<any>;
    searchPeople(q?: string): Promise<{
        items: any;
    }>;
    findAll(): any;
    publicProfile(id: string): Promise<any>;
    findOne(id: string): Promise<any>;
    create(body: CreateUserDto): Promise<any>;
}
