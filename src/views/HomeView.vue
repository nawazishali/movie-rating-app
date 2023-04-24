<template>
  <main>
    <div class="form-control">
      <div class="max-w-sm mx-auto my-10 input-group">
        <input
          type="text"
          placeholder="Search movie titles..."
          class="input input-bordered"
          @keyup.enter="searchMovies"
          v-model="search"
        />
        <VueDatePicker v-model="year" year-picker auto-apply dark>
          <template #trigger>
            <input
              class="input input-bordered border-l-0 rounded-none w-[70px]"
              type="text"
              placeholder="Year"
              v-model="year"
            />
          </template>
        </VueDatePicker>

        <button class="btn btn-square" @click="searchMovies">
          <vue-feather type="search"></vue-feather>
        </button>
      </div>
    </div>

    <div class="mb-10 divider"><h1 class="text-4xl text-center">Movies</h1></div>

    <div class="flex flex-wrap gap-5 justify-evenly">
      <div
        v-for="movie in listOfMovies"
        :key="movie.imdbID"
        class="card w-[300px] bg-base-100 shadow-lg card-compact"
      >
        <figure>
          <img :src="movie.Poster" alt="movie-poster" class="rounded-xl aspect-[9/12]" />
        </figure>
        <div class="card-body">
          <p class="text-sm capitalize">{{ movie.Type }} . {{ movie.Year }}</p>
          <h2 class="card-title">{{ movie.Title }}</h2>
          <div class="justify-end card-actions"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted, ref, type Ref } from 'vue'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const year = ref('')

let search: Ref<string> = ref('')

const movieStore = useMovieStore()

let searchMovies = () => {
  movieStore.searchMovies(search.value || 'iron', year.value)
}

onMounted(() => {
  searchMovies()
})

let { listOfMovies } = storeToRefs(movieStore)
</script>
