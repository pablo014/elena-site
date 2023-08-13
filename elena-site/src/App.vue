<script setup lang="ts">
import { ref } from 'vue';
import Timeline, { Times } from "./components/Timeline.vue";
import FlipCard from "./components/FlipCard.vue";
const selected = ref(0);
const experience: Array<Array<string>> = [
    [
        'Served as the primary point of contact for B2B clients by managing communication and delivering on client objectives',
        'Partnered closely with sales, media planning and lead delivery teams by collaborating cross-functionally to ensure alignment of objectives and the highest level of client service',
        'Successfully managed client onboarding and campaign setup processes, ensuring smooth transitionsand optimal campaign performance, further solidifying client relationships through consistent communication and meticulous organization',
      'Facilitated weekly/bi-weekly meetings with clients to provide updates on campaign pacing and optimization by building relationships based on transparency and regular communication',
      'Prepared and presented post-campaign analysis reports, which provided clients with comprehensive insights and strategic recommendations for ongoing performance improvement'
    ],
  [
    'Successfully executed multiple concurrent projects from initial client contact to final delivery while ensuring budget adherence and maintaining quality standards',
    'Demonstrated exceptional leadership as the central liaison between clients and a diverse creative team by fostering clear communication and alignment on project objectives',
    'Implemented regular project updates and weekly meetings while fostering open dialogue and enhancing client satisfaction',
    'Showcased strong crisis management skills by promptly addressing and resolving project challenges'
  ],
  [
    'Crafted and executed compelling press releases, newsletters, and media pitches, showcasing strong client relationship management skills',
    'Adapted to client feedback to align project outputs with client expectations in order to provide client satisfaction',
    'Conceptualized and designed engaging media kits and blog posts, demonstrating creative strategy skills and proficiency in enhancing client brand stories'
  ]
]
const time: Array<Times> = [
  {
    title: 'Avani Media\nClient Success Coordinator',
    time: 'July 2022 - May 2023'
  },
  {
    title: 'Soapbox Agency\nProject Manager',
    time: 'March 2021 - December 2021'
  },
  {
    title: 'WallsPop Marketing & Communications Group\nPR & Content Strategist',
    time: 'January 2020 - March 2022'
  },
]

const onTimelineHover = (time: Times, index: number) => {
    console.log(time)
  selected.value = index;
}
const smoothScroll = (className: string) => {
    const sect = document.querySelector(className);
    if (sect) {
        sect.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
</script>

<template>
  <div class="fixed w-screen top-0 z-40 h-12 bg-gray-700 text-lg sm:text-3xl text-xs flex items-center">
      <img src="./assets/icons/Elena.png" class="h-12 sm:block hidden"/>
    <p class="p-2 m-2 cursor-pointer" @click="smoothScroll('.front')">Home</p>
    <p class="p-2 m-2 cursor-pointer" @click="smoothScroll('.about_me')">About Me</p>
    <p class="p-2 m-2 cursor-pointer" @click="smoothScroll('.exp')">Skills and Experience</p>
  </div>
  <div class="container">
    <div class="fp-section front" data-anchor="home">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
      <div class="z-10 absolute sm:top-40 sm:bottom-10 sm:left-10 left-4 sm:right-10 right-4 flex flex-col justify-between">
        <div>
          <h1>Elena Seeley</h1>
          <h2>Project Manager</h2>
        </div>
        <div class="flex flex-wrap gap-3">
          <a href="mailto: elenaseeleyaz@gmail.com" class="icon">
            <font-awesome-icon icon="fa-solid fa-envelope" size="2xl" />
          </a>
          <a href="https://www.linkedin.com/in/elenaseeley/" class="icon" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" size="2xl" />
          </a>
          <a href="https://twitter.com/elena_seeley" class="icon" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon icon="fa-brands fa-twitter" size="2xl" />
          </a>
        </div>
      </div>
    </div>
    <div class="fp-section about_me">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
        <div class="z-10 absolute top-20 bottom-20 sm:left-10 left-4 sm:right-10 right-4 sm:hidden block">
            <FlipCard>
                <template v-slot:front>
                    <h1 class="text-center">About Me</h1>
                    <div class="relative flex items-center justify-center">
                        <div class="bg-black z-20 w-full h-64 rounded-full opacity-30 absolute"></div>
                        <div class="h-64 w-full rounded-full bg-gradient-to-b from-green-900 to-amber-400 z-10 flex items-center overflow-y-hidden">
                            <img src="./assets/elena-about.png" class="rounded-full object-contain">
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-2">
                        <font-awesome-icon icon="fa-rotate" flip size="xl"/>
                    </div>
                </template>
                <template v-slot:back>
                    <div class="about">
                        <h1>About Me</h1>
                        <div>
                            As a Brigham Young University - Idaho graduate with a bachelor's degree in communication, I am passionate about developing and maintaining solid relationships with clients and delivering on their objectives. I have gained valuable experience in client success coordination, PR and content strategy, and project management in various settings, including B2B media, marketing and communications, and creative agencies.
                        </div>
                        <div>
                            I have demonstrated my skills in copywriting and project management by using tools such as Microsoft Office, Canva, WordPress, Google Suite, Asana, Trello, Basecamp, Monday, Salesforce, and Slack. I am optimistic, driven, and service-minded.</div>
                    </div>
                </template>
            </FlipCard>
        </div>
      <div class="z-10 absolute top-20 bottom-20 sm:left-10 left-4 sm:right-10 right-4 sm:grid grid-cols-2 sm:grid-cols-3 gap-10 hidden">
        <div class="col-span-2 about">
          <h1>About Me</h1>
          <div>
            As a Brigham Young University - Idaho graduate with a bachelor's degree in communication, I am passionate about developing and maintaining solid relationships with clients and delivering on their objectives. I have gained valuable experience in client success coordination, PR and content strategy, and project management in various settings, including B2B media, marketing and communications, and creative agencies.
          </div>
          <div>
            I have demonstrated my skills in copywriting and project management by using tools such as Microsoft Office, Canva, WordPress, Google Suite, Asana, Trello, Basecamp, Monday, Salesforce, and Slack. I am optimistic, driven, and service-minded.</div>
        </div>
        <div class="relative flex items-center col-span-2 sm:col-span-1">
          <div class="bg-black z-20 w-full h-60 rounded-full opacity-30 absolute"></div>
            <div class="h-60 w-full rounded-full bg-gradient-to-b from-green-900 to-amber-400 z-10 flex items-center overflow-y-hidden">
                <img src="./assets/elena-about.png" class="rounded-full object-contain">
            </div>
        </div>
      </div>
    </div>
    <div class="fp-section exp">
      <div class="bg-gradient-to-b from-black to-green-900 absolute top-0 bottom-0 left-0 right-0 opacity-60 z-0"></div>
        <div class="block sm:hidden z-10 absolute top-20 bottom-10 left-4 right-4">
            <Timeline class="text-sm" :times="time" @on-click="onTimelineHover">
                <template #title>
                    <div></div>
                </template>
            </Timeline>
            <FlipCard>
                <template #back>
                    <div class="grid grid-cols-4 gap-4 skill-list">
                        <h2 class="col-span-4">Skills</h2>
                        <img src="./assets/icons/asana.png" class="skill" />
                        <img src="./assets/icons/basecamp.png" class="rounded-full skill" />
                        <img src="./assets/icons/canva.png" class="skill" />
                        <img src="./assets/icons/google.jpg" class="rounded-full skill" />
                        <img src="./assets/icons/google-marketing.png" class="rounded-full skill" />
                        <img src="./assets/icons/microsoft-suite.png" class="rounded-full skill" />
                        <img src="./assets/icons/monday.png" class="rounded-full bg-gray-100 skill" />
                        <img src="./assets/icons/salesforce.jpg" class="rounded-full skill" />
                        <img src="./assets/icons/slack.png" class="rounded-full skill" />
                        <div class="flex items-center justify-center mt-2 col-span-4">
                            <font-awesome-icon icon="fa-rotate" flip size="xl"/>
                        </div>
                    </div>
                </template>
                <template #front>
                        <div class="about py-2 overflow-y-scroll summary">
                            <div v-if="selected > -1">
                                <h3>{{ time[selected].title }}</h3>
                                <ul>
                                    <li v-for="exp in experience[selected]">
                                        {{ exp }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div class="flex items-center justify-center mt-2">
                        <font-awesome-icon icon="fa-rotate" flip size="xl"/>
                    </div>
                </template>
            </FlipCard>
        </div>
      <div class="z-10 absolute top-20 bottom-10 sm:left-10 left-4 sm:right-10 right-4 sm:block hidden">
          <h1>Skills and Experience</h1>
          <div class="grid grid-cols-12 gap-4">
              <div class="col-span-4 grid grid-cols-4 gap-4 skill-list">
                  <h2 class="col-span-4">Skills</h2>
                  <img src="./assets/icons/asana.png" class="skill" />
                  <img src="./assets/icons/basecamp.png" class="rounded-full skill" />
                  <img src="./assets/icons/canva.png" class="skill" />
                  <img src="./assets/icons/google.jpg" class="rounded-full skill" />
                  <img src="./assets/icons/google-marketing.png" class="rounded-full skill" />
                  <img src="./assets/icons/microsoft-suite.png" class="rounded-full skill" />
                  <img src="./assets/icons/monday.png" class="rounded-full bg-gray-100 skill" />
                  <img src="./assets/icons/salesforce.jpg" class="rounded-full skill" />
                  <img src="./assets/icons/slack.png" class="rounded-full skill" />
              </div>
              <div class="col-span-6 about py-2 overflow-y-scroll summary">
                <div v-if="selected > -1">
                    <h3>{{ time[selected].title }}</h3>
                  <ul>
                    <li v-for="exp in experience[selected]">
                        {{ exp }}
                    </li>
                  </ul>
                </div>
              </div>
              <Timeline class="col-span-2" :times="time" @on-click="onTimelineHover">
                  <template #title>
                      <div></div>
                  </template>
              </Timeline>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
    max-width: none !important;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}
.fp-section {
    @apply relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    scroll-snap-align: start;
}
.front {
  background-image: url("./assets/coffee.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.icon {
  @apply rounded-full cursor-pointer hover:scale-125 transition-all duration-500;
  padding: 1.5rem;
  border: solid 2px black;
    @media only screen and (max-width: 600px) {
        padding: .6rem;
    }
}
.about_me {
  background-image: url("./assets/office.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about {
  @apply border-2 rounded-lg px-4;
  background: rgba(16, 16, 16, 0.8);
    overflow-y: scroll;
    height: 75vh;
}
.exp {
  background-image: url("./assets/keyboard.png");
  background-repeat: no-repeat;
  background-size: cover;
}
ul {
  list-style-type: circle !important;
  padding-left: 1rem;
}
.skill {
  @apply h-full w-full;
}
.skill-list {
  max-height: 5rem;
}
.summary {
    height: 60vh;
    white-space: pre-wrap;
}
</style>
