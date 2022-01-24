<template>
    <Carrousel />
    <Navbar />
    <router-view class="bg-gradient-to-t from-cyan-600 to-blue-100"></router-view>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";
import Carrousel from "./components/UI/Carrousel.vue";
export default {
    components: { Navbar, Carrousel }
}
</script>