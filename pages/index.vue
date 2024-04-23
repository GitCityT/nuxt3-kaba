<template>
  <div @click="incr('123')">this is the index page{{ loading }};</div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();

const loading = ref("");

// When accessing /posts/1, route.params.id will be 1
console.log(route);

function incr(str) {
  loading.value = str + "1";
}
</script>

<style lang="scss" scoped>
div {
  font-size: 14;
}
</style>
