<template>
  <div>
    <a :href="href">
      <div>{{ presenter }}</div>
      <div>{{ title }}</div>
      {{ href }}
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    presenter?: string,
    href: string,
}>();
</script>
