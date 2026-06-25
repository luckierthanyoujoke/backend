import type { UserJSON } from '@clerk/backend';
export declare function clerkUserJsonToSyncParams(data: UserJSON): {
    clerkId: any;
    email: string;
    name: any;
    avatarUrl: any;
};
