<template>
    <h1>主页</h1>
    <transition>
        <h1 v-if="true" animate-bounce-in-up>{{ token }}</h1>
    </transition>
    <div>{{ userInfo }}</div>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/stores/user.ts";

const {token, userInfo} = useUserStore()
</script>

<style scoped>

</style>