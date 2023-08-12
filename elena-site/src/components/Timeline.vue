<script setup lang="ts">

export interface Times {
  title: string,
  time: string,
}
export interface Timeline {
    times: Array<Times>
}
const props = withDefaults(defineProps<Timeline>(), {
    times: () => [],
})
</script>

<template>
<div>
    <div class="flex flex-col justify-center items-center" v-for="(time, index) in props.times">
        <slot :name="time.title" :time="time">
          <div class="cursor-pointer" @hover="$emit('onHover', time, index)" @click="$emit('onClick', time, index)">
              <slot name="title" :title="time.title">
                  <p>{{time.title}}</p>
              </slot>
              <slot name="time" :time="time.time">
                  <p>{{time.time}}</p>
              </slot>
          </div>
        </slot>
        <div v-if="index !== times.length - 1" class="vertical"></div>
    </div>
</div>
</template>

<style scoped>
.vertical {
    border-left: 6px solid black;
    height: 1.5rem;
}
p {
  white-space: pre-wrap;
  text-align: center;
}
</style>