<script setup lang="ts">
import { VueFlip } from 'vue-flip';
</script>

<template>
  <full-page>
    <div class="fp-section">
      <vue-flip active-click>
        <template v-slot:front>
          front
        </template>
        <template v-slot:back>
          back
        </template>
      </vue-flip>
      <div>
        test for font
      </div>
    </div>
    <div class="fp-section">
      <h1>Whereas disregard and contempt for human rights have resulted</h1>
    </div>
  </full-page>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
