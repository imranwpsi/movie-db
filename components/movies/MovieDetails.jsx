/* eslint-disable @next/next/no-img-element */
export default function MovieDetails({ dictionary, movie }) {
  return (
      <section>
          <div>
              <img className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                  src={movie.backdrop_path} alt="" />
          </div>

          <div className="grid grid-cols-12 py-12 gap-8">
              <div className="col-span-2">
                  <img src={movie.poster_path} alt="" />
              </div>
              <div className="col-span-8">
                  <h2 className="font-bold text-slate-300 text-2xl">{movie.title}</h2>
                  <p className="my-2 text-slate-400 italic">{movie.overview}</p>
                  <ul className="text-slate-300 space-y-2 my-8">
                      <li>{dictionary.release_date} : {movie.release_date}</li>
                      <li>{dictionary.average_vote} : {movie.vote_average}</li>
                      <li>{dictionary.vote_count} : {movie.vote_count}</li>
                      <li>{dictionary.popularity} : {movie.popularity}</li>
                  </ul>

              </div>
              <div className="col-span-2 space-y-4">
                  <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                      {dictionary.stream_in_hd}
                  </button>
                  <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                      {dictionary.download_in_hd}
                  </button>
              </div>
          </div>
      </section>
  )
}
