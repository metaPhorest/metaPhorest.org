<template>
  <a v-if="link" :href="link" class="event">
    <h3>{{ header }}</h3>
    <div id="date">{{ date }}</div>
    <img v-if="image" :src="image" />
    <div>{{ title }}</div>
    <div>
      <slot />
    </div>
  </a>
  <div v-else class="event">
    <h3>{{ header }}</h3>
    <div id="date">{{ date }}</div>
    <img v-if="image" :src="image" />
    <div>{{ title }}</div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string
  title: string,
  date: string,
  link?: string,
  image?: string,
}>();
</script>

<style>


.event {
  padding: 1em;
  margin: 1em 0;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 0.5em;
  font-size: 0.9em;
  display: block;
}

a.event {
  text-decoration: none;
  background: var(--vp-c-default-soft);
}
a.event:hover {
  background: #ddd;
}
a.event:active {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.event h3 {
  margin: 0;
}

.event img {
  margin: 0.25em 0;
}






</style>
