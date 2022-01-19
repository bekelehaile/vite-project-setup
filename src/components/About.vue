<template>
    <div class="p-20">
        <h1 class="font-bold font-mono">{{ name }}</h1>
        <button
            @click="backHome"
            class="text-white rounded-lg p-2 bg-indigo-500"
        >
            Back
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const name = computed(() => {
    return store.state.user.name
})
function backHome() {
    router.push({ name: 'Home' })
}
</script>

<style lang="scss" scoped></style>
