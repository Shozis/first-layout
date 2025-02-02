<script setup>
defineProps({
    color: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="circle"
    :style="[`background: ${color}`]" >{{ id }}</div>
</template>

<style lang="scss" scoped>
.circle{
width: 100px;
height: 100px;
    border: solid 5px black;
    color: black;
    border-radius: 50%;
}
</style>