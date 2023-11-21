<template>
    <h1>{{ userInfo?.id }}</h1>
    <h2>{{ token }}</h2>
</template>

<script lang="ts" setup>
const {token, userInfo} = useUserStore();
</script>

<style scoped>

</style>