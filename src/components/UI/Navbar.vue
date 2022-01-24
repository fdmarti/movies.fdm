<template>
  <nav class="w-full flex flex-row justify-between items-center bg-slate-700 text-white p-4">
      <section class="flex gap-5">
        <router-link to="/">Inicio</router-link>
        <router-link to="/toprated">Mas populares</router-link>
      </section>
      <section>
        <input 
          type="text" 
          placeholder="Buscar"
          class="p-2 rounded-lg bg-slate-500 text-white outline-none focus:bg-slate-200 focus:text-slate-800"
          >
      </section>
  </nav>
</template>

<script>
export default {

}
</script>