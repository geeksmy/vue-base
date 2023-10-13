export interface LoginUser {

}

export interface LoginRes {
    expires_at: number
    token: string
    user: LoginUser
}