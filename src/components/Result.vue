<script setup>
import {defineProps} from "vue";
import {RouterLink} from "vue-router"

const {quizQuestionLength,numberOfCorrectAnswer} = defineProps(["quizQuestionLength","numberOfCorrectAnswer"])

</script>

<template>
    <div class="results text-center px-24">
        <p class=" text-2xl">Your Results...</p>
        <h1 class=" text-6xl">
            {{ numberOfCorrectAnswer }}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/">
            <button class="p-2 mt-5 bg-slate-500 hover:bg-slate-200 rounded-xl">Back to Main Page</button>
        </RouterLink>
    </div>
</template>