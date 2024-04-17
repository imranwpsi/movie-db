import MovieCard from './MovieCard'

export default function MovieList({ dictionary, movies }) {
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movies && movies.length > 0 ? 
                        movies.map(movie => (
                            <MovieCard dictionary={dictionary} key={movie.id} movie={movie} /> 
                        ))
                    : <h1 className='text-xl'>Movie not found</h1>
                }
            </div>
        </div>
    )
}
