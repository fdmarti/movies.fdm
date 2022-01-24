<template>

  <div class="rounded-md overflow-hidden shadow-xl m-8 bg-slate-50 flex flex-col justify-between">

    <img class="bg-cover hover:bg-white" :src="'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path" :alt="movie.original_title+'_img'">

    <div class="mx-6 my-4  border-gray-light">
      <div class="font-bold text-xl text-gray-700 mb-4">
        {{movie.title}} <br> <span class="text-yellow-500">{{movie.vote_average}}/10</span>
      </div>
      <p class="font-normal text-gray-dark text-sm mb-2">
        {{movie.overview.substr(0,150) + '[...]'}}
      </p>
    </div>
    <section class="mx-6 my-4">
      <button class="bg-sky-900 hover:bg-sky-600 text-white p-2 rounded-md">Ver detalle</button>
    </section>
  </div>
</template>

<script>
export default {
  props:['movie']
}
</script>