<script setup lang="ts">
import { VueFlip } from 'vue-flip';
const options = {
  licenseKey: 'YOUR_KEY_HERE',
      menu: '#menu',
      anchors: ['home', 'about_me'],
};
</script>

<template>
  <div class="w-screen absolute z-20 h-12 p-2 bg-gray-700 text-lg sm:text-3xl">
    <a class="p-2 m-2" href="#home">Home</a>
    <a class="p-2 m-2" href="#about_me">About Me</a>
    <a class="p-2 m-2" href="#exp">Skills and Experience</a>
  </div>
  <full-page :options="options">
    <div class="fp-section front" data-anchor="home">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
      <div class="z-10 absolute top-40 bottom-10 sm:left-10 left-4 sm:right-10 right-4 flex flex-col justify-between">
        <div>
          <h1>Elena Seeley</h1>
          <h2>Project Manager</h2>
        </div>
        <div class="flex">
          <a href="mailto: elenaseeleyaz@gmail.com" class="icon">
            <font-awesome-icon icon="fa-solid fa-envelope" beat size="2xl" />
          </a>
          <a href="https://www.linkedin.com/in/elenaseeley/" class="icon" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" beat size="2xl" />
          </a>
          <a href="https://twitter.com/elena_seeley" class="icon" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon icon="fa-brands fa-twitter" beat size="2xl" />
          </a>
        </div>
      </div>
    </div>
    <div class="fp-section about_me" data-anchor="about_me">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
      <div class="z-10 absolute top-30 bottom-20 sm:left-10 left-4 sm:right-10 right-4 grid grid-cols-3 gap-10">
        <div class="col-span-2 about">
          <h1>About Me</h1>
          <div>
            As a Brigham Young University - Idaho graduate with a bachelor's degree in communication, I am passionate about developing and maintaining solid relationships with clients and delivering on their objectives. I have gained valuable experience in client success coordination, PR and content strategy, and project management in various settings, including B2B media, marketing and communications, and creative agencies.
          </div>
          <div>
            I have demonstrated my skills in copywriting and project management by using tools such as Microsoft Office, Canva, WordPress, Google Suite, Asana, Trello, Basecamp, Monday, Salesforce, and Slack. I am optimistic, driven, and service-minded.</div>
        </div>
        <div class="relative">
          <div class="bg-black z-20 w-full h-full rounded-full opacity-30 absolute"></div>
          <img src="./assets/elena-about.png" class="rounded-full bg-gradient-to-b from-green-900 to-amber-400 z-10">
        </div>
      </div>
    </div>
    <div class="fp-section exp" data-anchor="exp">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
      <div class="z-10 absolute top-40 bottom-10 sm:left-10 left-4 sm:right-10 right-4">Skills and Experience</div>
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
.about_me {
  background-image: url("./assets/office.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about {
  @apply border-2 rounded-lg px-4;
  background: rgba(16, 16, 16, 0.8);
}
.exp {
  background-image: url("./assets/keyboard.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
