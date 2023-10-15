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