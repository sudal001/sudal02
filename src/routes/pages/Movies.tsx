import MovieSearcher from '@/components/movies/MovieSearcher'
import MovieList from '@/components/movies/MovieList'
import { useOutlet } from 'react-router'

export default function Movies() {
  const outlet = useOutlet()
  return (
    <main className="mx-auto max-w-[1200px] p-4">
      <MovieSearcher />
      <MovieList />
      {outlet}
    </main>
  )
}
