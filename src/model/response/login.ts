export interface LoginUser {
    id: number
}

export interface LoginRes {
    expires_at: number
    token: string
    user: LoginUser
}