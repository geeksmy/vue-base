<template>
    <h1>主页</h1>
    <div>{{ token }}</div>
    <div>{{ userInfo }}</div>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/stores/user.ts";

const {token, userInfo} = useUserStore()
</script>

<style scoped>

</style>