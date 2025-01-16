<template>
    {{ p }}
<Circle color="green" id="1" />
<Circle color="yellow" id="2" />
<Circle color="red" id="3" />
<Lightbtn @click="OnChange" text="1"/>
<Lightbtn @click="OnChange" text="2"/>
</template>

<script setup>
import Circle from '../components/Circle.vue';
import { ref } from 'vue';
import Lightbtn from '../components/Lightbtn.vue';

const p = ref(0);

const OnChange = (value) => {
    console.log(value);
    const t = Number(value);
    p.value += t;
}

</script>