<template>
    <Navbar />
    <router-view></router-view>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";
export default {
    components: { Navbar }
}
</script>