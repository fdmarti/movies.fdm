<template>
<div v-if="loading" class="h-screen">
  <section class="pt-56">
    <Spinner />
  </section>
</div>
<div v-else>
  <h3 class="p-6 uppercase font-bold">Mejores peliculas</h3>
  <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place">
    <Card v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</div>
</template>

<script>
import Card from "../components/Card.vue";
import store from "../store/store";
import Spinner from "../components/UI/Spinner.vue";
import { ref } from '@vue/reactivity';
export default {
    components: { Card, Spinner },
    setup(){

      const loading = ref(true)

      const getMovies = () => {
        store.dispatch('getMoviesTopRated')
          .then(resp => resp.state === 1 ? loading.value = false : loading.value = true)
      }
      getMovies()

      return {
        loading
      }
    },

    computed:{
      movies(){
        return store.getters.movies
      }
    }
}
</script>