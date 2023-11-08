<script setup>
// import
  // for dark mode
  import { useDark, useToggle } from '@vueuse/core'
  // quiz data
  import q from "../data/quizes.json"
  // state
  import { ref, watch } from 'vue';
  // card component
  import Card from "../components/Card.vue";
  // for routing
  import {RouterView} from "vue-router";

// Property
  //
  const quizzes = ref(q);
  const search = ref("");

// methods
  // methods for dark mode
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  watch(search, () =>{
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>

<template>
  <div class=" ">
    <div class="px-24 pt-1">
      <header class="flex justify-between mb-3 mt-7 items-center">
        <div class="flex">
          <h1 class=" font-bold mr-7 text-3xl">Quizzes</h1>
          <input v-model.trim="search" type="text" name="" id="" class=" bg-slate-200 hover:ring hover:bg-slate-300  rounded-xl p-1 px-3 " placeholder="Search...">
        </div>
        <div class="">
          <button type="button" @click="toggleDark()">
            {{ isDark ? "Dark" : "Light" }}
          </button>
        </div>
      </header>
      <div class="options-container flex flex-wrap mt-10">
        <RouterView/>
          <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
