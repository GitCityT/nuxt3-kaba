<template>
    <div @click="incr">this is the test page;{{ loading }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
    const route = useRoute()

    const loading = ref(0)

    // When accessing /posts/1, route.params.id will be 1
    console.log(route)

    function incr(){
        loading.value++
    }
</script>

<style lang="scss" scoped>
div{
    font-size:14;
}
</style>