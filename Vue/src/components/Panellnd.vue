<template>
    <div class="panel">
        {{ title }}
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.panel {
    margin: 100px 80px;
    background-color: #212121;
    border-radius: 20px;
}
</style>