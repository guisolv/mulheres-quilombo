<script setup lang="ts">
    import type IWomanData from '#shared/types/womanData';
    import womenList from '#shared/womenList';

    console.log(womenList)

    const womans = ref<Array<IWomanData>>(womenList)

</script>

<template>
    <main class="bg-red-500">
        <h1 class="text-5xl text-center mt-12">Mulheres do quilombo</h1>


        <WomanPage :woman="womans[0]" />
    </main>
</template>

<style>

h1 {
    font-family: Raleway, serif;
    font-weight: 500;
}

</style>
