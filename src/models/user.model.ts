export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    profileId: string;
}

export interface UserDTO {
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    profileId: string;
}