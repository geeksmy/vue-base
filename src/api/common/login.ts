import {usePost} from "@/utils/request.ts";
import {LoginReq} from "@/model/request/login.ts";
import {LoginRes} from "@/model/response/login.ts";

export const LoginApi = (params: LoginReq) => {
    return usePost<LoginRes, LoginReq>('/login', params)
}
