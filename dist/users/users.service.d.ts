import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly prisma;
    private readonly storage;
    constructor(prisma: PrismaService, storage: StorageService);
    findAll(): any;
    findById(id: string): Promise<any>;
    findPublicById(id: string): Promise<any>;
    searchByName(q: string): Promise<{
        items: any;
    }>;
    create(data: CreateUserDto): Promise<any>;
    syncFromClerk(params: {
        clerkId: string;
        email: string;
        name: string;
        avatarUrl?: string | null;
    }): Promise<any>;
    updateAvatar(userId: string, avatarUrl: string): Promise<any>;
    removeByClerkId(clerkId: string): Promise<void>;
}
