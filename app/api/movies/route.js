import movies from "@/lib/movie-data";
import { NextResponse } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    
    if (query) {
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLocaleLowerCase().includes(query)
        );
        return NextResponse.json(filteredMovies);
    }

    return NextResponse.json(movies);
}