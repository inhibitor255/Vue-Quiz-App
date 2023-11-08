<script setup>
    import {defineProps} from "vue";

    const {questionStatus, barPercentage} = defineProps(["questionStatus", "barPercentage"]);
    console.log(questionStatus, barPercentage);
</script>


<template>
    <header class=" mt-5 pt-5">
        <h4 class=" text-3xl">Question {{questionStatus}}</h4>
        <div class=" w-72 h-12 border border-yellow-200">
            <div :style="{width: barPercentage}" class=" h-full w-0  bg-yellow-200">
                
            </div>
        </div>
    </header>
</template>