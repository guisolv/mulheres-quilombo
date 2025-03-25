<script setup lang="ts">
    import type IWomanData from '#shared/types/womanData';
    import womenList from '#shared/womenList';

    console.log(womenList)

    const womans = ref<Array<IWomanData>>(womenList)

</script>

<template>
    <main class="px-20">
        <h1 class="text-7xl text-center mt-12">Mulheres do quilombo</h1>


        <div v-for="woman in womans" :key="woman.name">
            <WomanPage :woman="woman"/>
            
            <div class="w-full my-4 border-t-2 border-dashed border-black" />
        </div>
    </main>
</template>

<style scoped>

h1 {
    font-family: Crimson Pro, serif;
    font-weight: 600;
}

</style>
