<template>
  <div>
    <h3>Title: {{ title }}</h3>
    <img :src="src" v-if="src">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  src: string,
}>();
</script>

