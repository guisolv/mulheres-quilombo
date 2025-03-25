<script setup lang="ts">
    import type WomanData from '~/shared/types/womanData';

    const _props = defineProps<{
        woman: WomanData
    }>()

</script>


<template>
    <main>
        <h1>{{ woman.name }}</h1>

        <p>{{ woman.paragraphs }}</p>
    </main>
</template>