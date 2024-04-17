import movies from "@/lib/movie-data";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
    const movieId = params.id;

    const movie = movies.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie) {
        return NextResponse.json('Not movie found');
    }

    return NextResponse.json(movie);
}

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = params.id;
    const movieIndex = movies.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );
    movies[movieIndex].title = movie.title;

    return Response.json(movies[movieIndex]);
}