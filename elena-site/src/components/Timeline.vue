<script setup lang="ts">
export interface Timeline {
    times: Array<{title: string, time: string}>
}
const props = withDefaults(defineProps<Timeline>(), {
    times: () => [],
})
</script>

<template>
<div>
    <div class="flex flex-col justify-center items-center" v-for="(time, index) in times">
        <slot :name="time.title" :time="time" @hover="$emit('onHover', time)" @click="$emit('onClick', time)">
            <p>{{time.title}}</p>
            <p>{{time.time}}</p>
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
</style>