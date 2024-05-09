<template>
  <div @click="incr">this is the about page;{{ loading }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(0);

// When accessing /posts/1, route.params.id will be 1
function incr() {
  loading.value++;
}
</script>

<style lang="scss" scoped></style>
