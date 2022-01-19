<template>
    <div class="min-h-screen p-20">
        <HomeIcon class="h-5 w-5 text-blue-500" />
        <BeakerIcon class="h-5 w-5 text-blue-500" />
        <div>My name is {{ name }}</div>
        <div
            class="relative px-3 py-6 border border-gray-300 shadow-lg rounded-lg"
        >
            <div class="absolute bg-red-300 top-0 right-0">New Brand</div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                blanditiis tempore veniam doloribus nulla vero rem temporibus
                autem maxime illo sit voluptatibus, enim amet fuga mollitia
                consectetur veritatis laborum. Illum.
            </p>
        </div>
    </div>
</template>

<script setup>
import { BeakerIcon, HomeIcon } from '@heroicons/vue/solid'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore() // store instead of `$store`

const name = computed(() => {
    return store.state.user.name
})
</script>

<style lang="scss" scoped></style>
