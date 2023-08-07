<script setup lang="ts">
import { VueFlip } from 'vue-flip';
</script>

<template>
  <full-page>
    <div class="fp-section front">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
      <div class="z-10 absolute top-40 bottom-10 sm:left-10 left-4 sm:right-10 right-4 flex flex-col justify-between">
        <div>
          <h1>Elena Seeley</h1>
          <h2>Project Manager</h2>
        </div>
        <div class="flex">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-envelope" beat size="2xl" />
          </div>
          <div class="icon">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" beat size="2xl" />
          </div>
          <div class="icon">
            <font-awesome-icon icon="fa-brands fa-twitter" beat size="2xl" />
          </div>
        </div>
      </div>
    </div>
    <div class="fp-section">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60"></div>
      <div class="z-10">test</div>
    </div>
  </full-page>
</template>

<style scoped>
.front {
  background-image: url("./assets/coffee.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.icon {
  @apply rounded-full cursor-pointer;
  padding: 2rem;
  margin-right: 1.5rem;
  border: solid 2px black;
}
</style>
