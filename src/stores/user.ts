import {defineStore} from "pinia";
import {shallowRef} from "vue";
import {LoginApi} from "~/api/common/login.ts";
import {LoginUser} from "~/model/response/login.ts";
import {LoginReq} from "~/model/request/login.ts";

export const useUserStore = defineStore('user', () => {
    const token = shallowRef()
    const userInfo = shallowRef<LoginUser>()

    const GetTokenAndUserInfo = async (params: LoginReq) => {
        // const loginParams: LoginReq = {username: "", password: ""};
        // loginParams.username = params.value.username
        // loginParams.password = params.value.password
        const {data} = await LoginApi(params)
        token.value = data?.token
        userInfo.value = data?.user
    }
    return {token, userInfo, GetTokenAndUserInfo}
})