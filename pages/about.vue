<template>
    <div @click="incr">this is the about page;{{ loading }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let a = 1
console.log(a)

const loading = ref(0)

// When accessing /posts/1, route.params.id will be 1
function incr() {
    loading.value++
}
</script>

<style lang="scss" scoped></style>
