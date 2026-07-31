export type SenviokCoreEntitiesWaitlistEntry = {
    id?: string;
    email?: string;
    name?: string | null;
    referralCode?: string;
    referredBy?: string | null;
    referralCount?: number;
    createdAt?: string;
    position?: number;
};
