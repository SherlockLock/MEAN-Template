export interface UserRoot {
    user: User
    exp: number;
    iat: number;
}

export interface User {
    _id: string;
    email: string;
    name: string;
    userProfile: string;
}

export interface TokenResponse {
    token: string;
    session: any;
}

export interface TokenPayload {
    name: string;
    email: string;
    phoneNumber?: string;
    password: string;
}

export interface PasswordChangeTokenPayload {
    _id: string;
    oldPassword: string;
    newPassword: string;
}


