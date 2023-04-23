import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { omdbService } from '@/services/omdbService'
import type { OmdbMovie, OmdbSearchResponse } from '@/ts/movieInterfaces'

export const useMovieStore = defineStore('movie', () => {
  const listOfMovies: Ref<OmdbMovie[] | undefined> = ref(undefined)
  const searchMovies = async (search: string) => {
    try {
      let response: OmdbSearchResponse = (
        await omdbService.get('', {
          params: {
            s: search
          }
        })
      ).data

      listOfMovies.value = response.Search
    } catch (error) {}
  }

  return { listOfMovies, searchMovies }
})
