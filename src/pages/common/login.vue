<template>
    <h1>登陆</h1>
    <a-form :model="LoginForm">
        <a-form-item>
            <a-input v-model:value="LoginForm.username"/>
        </a-form-item>
        <a-form-item>
            <a-input v-model:value="LoginForm.password"/>
        </a-form-item>
    </a-form>
    <a-button type="primary" @click="PostLogin">登陆</a-button>
</template>

<script lang="ts" setup>
import {getCurrentInstance, ref} from "vue";
import {useUserStore} from "@/stores/user.ts";

const LoginForm: any = ref({username: "", password: ""})
const {GetTokenAndUserInfo} = useUserStore()
const {proxy} = getCurrentInstance() as any

async function PostLogin() {
    await GetTokenAndUserInfo(LoginForm.value).then(() => {
        proxy.$router.push("/")
    })
}

</script>

<style scoped>

</style>