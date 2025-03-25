<script setup lang="ts">
    import type IWomanData from '#shared/types/womanData';
    import womenList from '#shared/womenList';

    console.log(womenList)

    const womans = ref<Array<IWomanData>>(womenList)

</script>

<template>
    <main class="bg-slate-200">
        <div class="bg-neutral-50  px-14 xl:w-6/12 lg:w-3/5 md:w-4/5 mx-auto border-x-2">
            <h1 class="text-7xl text-center py-12">Mulheres do quilombo</h1>


            <div v-for="woman in womans" :key="woman.name">
                <WomanPage :woman="woman"/>

                <div class="w-full my-4 border-t-2 border-dashed border-black" />
            </div>
        </div>
    </main>
</template>

<style scoped>

h1 {
    font-family: Crimson Pro, serif;
    font-weight: 600;
}

</style>
