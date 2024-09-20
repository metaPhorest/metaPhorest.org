<template>
  <a :href="link" id="eventLink">
    <div id="event">
      <h3>{{ title }}</h3>
      <div id="date">{{ date }}</div>
      <img :src="image" />
      <div>
        <slot />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    date: string,
    link: string,
    image?: string,
}>();
</script>

<style>

#event {
  border: 1px solid var(--vp-c-default-soft);
}

#event:hover {
  border: 1px solid var(--vp-c-brand-1);
}

#event:active {
  border: 1px solid var(--vp-c-brand-2);
  background: var(--vp-c-brand-2);
  color: #fff;
}

#event {
  background: var(--vp-c-default-soft);
  padding: 1em;
  border-radius: 0.5em;
  font-size: 0.9em;
}

#eventLink {
  text-decoration: none;
  color: #444;
}

#event h3 {
  margin: 0;
}

#event img {
  margin: 0.25em 0;
}






</style>
