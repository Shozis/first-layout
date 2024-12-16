<template>
    <button class="button">
        {{ btn }}
    </button>
</template>

<script setup>

defineProps({
    btn: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.button {
    max-width: 250px;
    padding: 20px 25px;
    background-color: #F5333F;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    font-size: 20px;
}
</style>