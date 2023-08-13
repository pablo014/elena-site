<script setup lang="ts">
import { ref } from 'vue'
const isFront = ref(true);
</script>
<template>
    <div class="btn-container">
        <Transition name="slide-up">
            <div v-if="isFront"
                    @click="isFront = !isFront">
                <slot name="front"></slot>
            </div>
            <div v-else
                    @click="isFront = !isFront">
                <slot name="back"></slot>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.btn-container {
    display: inline-block;
    position: relative;
    height: 75vh;
    width: 90vw;
}

div {
    position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>
