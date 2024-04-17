import Sidebar from "@/components/Sidebar";
import MovieDetails from "@/components/movies/MovieDetails";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";
import { getMovies } from "../../movies";

export default async function movieDetailsPage ({params: {id, lang}}) {
    const dictionary = await getDictionary(lang);
    const movies = await getMovies();
    const movie = movies.find((item) => item.id === parseInt(id));
    if (!movie) {
        notFound();  
    }

    return (
        <>
            <Sidebar dictionary={dictionary} />
            <MovieDetails id={id} dictionary={dictionary} movie={movie} />
        </>
    )
}
