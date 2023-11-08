<script setup>
    import {defineProps} from "vue";
    import {useRouter} from "vue-router";

    const router = useRouter();
    const {quiz} = defineProps(["quiz"]);

    const navigateToQuiz = () =>{
        router.push(`/quiz-room/${quiz.id}`);
    };
</script>

<template>
    <div @click="navigateToQuiz" class="card w-80 overflow-hidden rounded-xl shadow-lg mb-9 me-5 cursor-pointer ">
        <img class=" w-full h-48 m-0" :src="quiz.img" alt="">
        <div class="card-text px-2 py-1">
            <h2 class=" font-bold">{{quiz.name}}</h2>
            <p class=" font-bold">{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>