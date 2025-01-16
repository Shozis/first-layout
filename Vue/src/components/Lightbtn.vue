<template>
<button @click="Onchange(text)">{{ text }}</button>
</template>

<script setup>

defineProps({
    text: {
        type: String,
        required: true
    }
})

const counter = 0;
const reset = 0;

const emits = defineEmits
(['click']);

const Onchange =( text) => {
    emits('click', text);
}
</script>   1