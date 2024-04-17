import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ dictionary, movie }) {
    // Function to render star ratings
    function renderStarRating(rating) {
        const stars = [];
        const maxRating = 5; // Maximum rating
        for (let i = 0; i < maxRating; i++) {
            if (i < rating) {
                stars.push(
                    <Image
                        key={i}
                        src="/assets/star.svg"
                        width="14"
                        height="14"
                        alt="Star"
                    />
                );
            } else {
                stars.push(
                    <Image
                        key={i}
                        src="/assets/empty-star.svg"
                        width="14"
                        height="14"
                        alt="Empty Star"
                    />
                );
            }
        }
        return stars;
    }

    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image className="w-full object-cover" src={movie.poster_path} alt="" width="355" height="428" />
            <figcaption className="pt-4">
                <Link href={`/movies/${movie.id}`}>
                    <h3 className="text-xl mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{movie.title}</h3>
                </Link>
                <p className="text-[#575A6E] text-sm mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{movie.overview}</p>
                <div className="flex items-center space-x-1 mb-5">
                    {renderStarRating(Math.ceil(movie.vote_average / 2))}
                </div>
                <Link className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`/movies/${movie.id}`}>
                    <Image src="/assets/tag.svg" alt="" width="19" height="19" />
                    <span>{dictionary.details}</span>
                </Link>
            </figcaption>
        </figure>
    )
}
