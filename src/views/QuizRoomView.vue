<script setup>
import Question from '../components/Question.vue';
import QuizHeader from "../components/QuizHeader.vue"
import Result from "../components/Result.vue"
import {useRoute}  from "vue-router"
import { ref, watch, computed } from 'vue';
import quizes from "../data/quizes.json"

const route = useRoute();
const quizId = parseInt(route.params.id);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false)

const quiz = quizes.find(q=>q.id === quizId);
// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

// watch(()=> currentQuestionIndex.value, ()=>{
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
// })

const questionStatus = computed(()=>{
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})

const barPercentage = computed(()=>{
    return `${currentQuestionIndex.value/quiz.questions.length * 100}%`
})

const onOptionSelected = (isCorrect) =>{
    if (isCorrect) {
        numberOfCorrectAnswer.value++;
    }
    if(quiz.questions.length - 1 === currentQuestionIndex.value){
        showResult.value = true;
    }
    currentQuestionIndex.value++;
}

</script>

<template>
    <div class=" w-auto h-screen flex justify-center items-center content-center ">
        <div class="">
            <QuizHeader v-if="!showResult" :questionStatus="questionStatus" :barPercentage="barPercentage" />
            <div class="">
                <Question v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
                <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswer="numberOfCorrectAnswer" />
            </div>
        </div>
    </div>
</template>