export interface OmdbSearchResponse {
  Search: OmdbMovie[]
  totalResults: string
  Response: string
}

export interface OmdbMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}