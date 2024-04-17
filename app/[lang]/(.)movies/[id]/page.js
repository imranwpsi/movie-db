import Modal from "@/components/Modal";
import MovieDetails from "@/components/movies/MovieDetails";
import { getDictionary } from "../../dictionaries";
import { getMovies } from "../../movies";

export default async function MovieModal({ params: { id, lang } }) {
    const dictionary = await getDictionary(lang);
    const movies = await getMovies();
    const movie = movies.find((item) => item.id === parseInt(id));

    return (
        <Modal>
            <MovieDetails id={id} dictionary={dictionary} movie={movie} />
        </Modal>
    )
}
