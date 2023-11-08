<script setup>
    import {defineProps, defineEmits} from "vue";

    const emit = defineEmits(["selectOption"])

    const {question} = defineProps(['question'])
    const emitSelectOption = (isCorrect) =>{
        emit("selectOption", isCorrect)
    }

</script>

<template>
    <div class="question-container m-5">
        <h1 class="question text-4xl">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div @click="emitSelectOption(option.isCorrect)" v-for="option in question.options" :key="option.id" class="option flex mb-5 cursor-pointer">
            <p class="option-label bg-yellow-200 w-12 h-12 text-2xl flex items-center justify-center">
                {{ option.label }}
            </p>
            <div class="option-value bg-slate-300 w-full text-2xl flex justify-start h-auto items-center ps-3   ">
                <p>
                    {{ option.text }}
                </p>
            </div>
        </div>
    </div>
</template>