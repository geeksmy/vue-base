import {defineStore} from "pinia";
import {shallowRef} from "vue";
import {LoginApi} from "@/api/common/login.ts";
import {LoginUser} from "@/model/response/login.ts";
import {LoginReq} from "@/model/request/login.ts";
import {parse, stringify} from "zipson/lib";

export const useUserStore = defineStore('user', () => {
    const token = shallowRef()
    const userInfo = shallowRef<LoginUser>()

    const GetTokenAndUserInfo = async (params: LoginReq) => {
        const {data} = await LoginApi(params)
        token.value = data?.token
        userInfo.value = data?.user
    }
    return {token, userInfo, GetTokenAndUserInfo}
}, {
    persist: {
        key: "user",
        storage: localStorage,
        paths: ["token", 'userInfo'],
        serializer: {
            deserialize: parse,
            serialize: stringify
        }
    }
})