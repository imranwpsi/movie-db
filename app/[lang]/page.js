import Sidebar from "@/components/Sidebar";
import MovieList from "@/components/movies/MovieList";
import { getDictionary } from "./dictionaries";
import { getMovies } from "./movies";

export default async function Home({ params: { lang } }) {
    const dictionary = await getDictionary(lang);
    const movies = await getMovies();

    return (
        <>
            <Sidebar dictionary={dictionary} />
            <MovieList dictionary={dictionary} movies={movies} />
        </>
    );
}
