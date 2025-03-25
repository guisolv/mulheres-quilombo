<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
    import type WomanData from '~/shared/types/womanData';

    const _props = defineProps<{
        woman: WomanData
    }>()

</script>


<template>
    <main>
        <h1 class="text-5xl">{{ woman.name }}</h1>

        <div v-for="text in woman.paragraphs" :key="text.name">
            <div class="w-full mt-2 border-t-2 border-dashed" />
            <h2 class="text-4xl">{{ text.name }}</h2>
            <p v-for="pt in text.paragraph.split('\n')" :key="pt" class="text-lg indent-10">
                {{ pt }}
            </p>
        </div>
    </main>
</template>

<style scoped>

h1, h2 {
    font-family: Crimson Pro, serif;
    font-weight: 600;
}

p {
    font-family: Roboto Slab;
    font-weight: 400;
}

</style>
