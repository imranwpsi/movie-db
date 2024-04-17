import 'server-only'

export const getMovies = async () => import('@/lib/movie-data.json').then((module) => module.default)