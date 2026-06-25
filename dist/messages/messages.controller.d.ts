import type { User } from '@prisma/client';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    conversations(user: User | undefined): Promise<any>;
    createConversation(user: User | undefined, body: CreateConversationDto): Promise<{
        id: string;
        participant: {
            id: string;
            name: string;
            avatarUrl: string | null;
            isPremium: boolean;
        };
        lastMessageText: string | null;
        lastMessageAt: Date;
        updatedAt: Date;
        blockedByMe: boolean;
        blockedMe: boolean;
    }>;
    messages(user: User | undefined, id: string): Promise<{
        conversation: {
            id: string;
            participant: {
                id: string;
                name: string;
                avatarUrl: string | null;
                isPremium: boolean;
            };
            lastMessageText: string | null;
            lastMessageAt: Date;
            updatedAt: Date;
            blockedByMe: boolean;
            blockedMe: boolean;
        };
        messages: any;
    }>;
    sendMessage(user: User | undefined, id: string, body: SendMessageDto): Promise<any>;
    userStatus(user: User | undefined, id: string): Promise<{
        blockedByMe: any;
        blockedMe: any;
    }>;
    blockUser(user: User | undefined, id: string): Promise<{
        blockedByMe: any;
        blockedMe: any;
    }>;
    unblockUser(user: User | undefined, id: string): Promise<{
        blockedByMe: any;
        blockedMe: any;
    }>;
}
