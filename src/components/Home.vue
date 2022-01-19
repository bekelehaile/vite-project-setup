<template>
    <div class="min-h-screen p-20">
        <HomeIcon class="h-5 w-5 text-blue-500" />
        <BeakerIcon class="h-5 w-5 text-blue-500" />
        <div>My name is {{ name }}</div>
        <div class="mb-4">
            <input
                type="text"
                class="p-2 mr-2 rounded-lg border border-indigo-500 focus:border-indigo-700 hover:border-indigo-800"
                v-model="newName"
            />
            <button
                @click="saveName"
                class="p-2 bg-indigo-500 text-white rounded-lg"
            >
                Submit
            </button>
        </div>
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

const newName = ref('')

function saveName() {
    store.dispatch('saveName', newName)
}
</script>

<style lang="scss" scoped></style>
