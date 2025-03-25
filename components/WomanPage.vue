<script setup lang="ts">
    import type WomanData from '~/shared/types/womanData';

    const _props = defineProps<{
        woman: WomanData
    }>()

</script>


<template>
    <main>
        <h1>{{ woman.name }}</h1>

        <div v-for="text in woman.paragraphs" :key="text.name">
            <h2 class="text-4xl">{{ text.name }}</h2>
            <p class="text-lg indent-10">{{ text.paragraph }}</p>
        </div>
    </main>
</template>

<style scoped>

h2 {
    font-family: Crimson Pro, serif;
    font-weight: 600;
}

p {
    font-family: Roboto Slab;
    font-weight: 400;
}

</style>
