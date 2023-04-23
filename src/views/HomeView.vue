<template>
  <main>
    <h1>Movies</h1>
    <div class="flex flex-wrap gap-5 justify-evenly">
      <div v-for="movie in listOfMovies" :key="movie.imdbID" class="card w-[300px] bg-base-100 shadow-md border border-slate-100 card-compact">
        <figure class="px-5 pt-5"><img :src="movie.Poster" alt="movie-poster"  class="rounded-xl"/></figure>
        <div class="card-body">
          <p class="text-sm text-gray-500 capitalize">{{ movie.Type }} . {{ movie.Year }}</p>
          <h2 class="card-title text-gray-700">{{ movie.Title }}</h2>
          <div class="card-actions justify-end">
            <!-- <button class="btn btn-primary">Buy Now</button> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'

const movieStore = useMovieStore()
movieStore.searchMovies('iron')

let { listOfMovies } = storeToRefs(movieStore)
</script>
