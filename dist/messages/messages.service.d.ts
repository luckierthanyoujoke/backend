import { PrismaService } from '../prisma/prisma.service';
export declare class MessagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private sortUserIds;
    private messagePreview;
    private mapConversationSummary;
    private getBlockStatus;
    private assertExistingOtherUser;
    private findConversationByPair;
    getUserStatus(currentUserId: string, otherUserId: string): Promise<{
        blockedByMe: any;
        blockedMe: any;
    }>;
    blockUser(currentUserId: string, otherUserId: string): Promise<{
        blockedByMe: any;
        blockedMe: any;
    }>;
    unblockUser(currentUserId: string, otherUserId: string): Promise<{
        blockedByMe: any;
        blockedMe: any;
    }>;
    createOrGetConversation(currentUserId: string, otherUserId: string): Promise<{
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
    listConversations(currentUserId: string): Promise<any>;
    listMessages(conversationId: string, currentUserId: string): Promise<{
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
    sendMessage(conversationId: string, currentUserId: string, textRaw: string | undefined, recipeIdRaw?: string): Promise<any>;
}
