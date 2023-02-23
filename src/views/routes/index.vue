<template>
    <div class="home" @click="click">
            home
    </div>
</template>

<script setup lang="ts" name="Home">
import { useRouter } from 'vue-router';
const router = useRouter();
const click = ()=>{
    router.push("login")
}
</script>