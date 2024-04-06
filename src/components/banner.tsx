import { movies } from "../types/movie_dummy";

export default function Banner() {
  const movie = movies[1];

  return (
    <div className="h-[640px] relative flex flex-col justify-center px-16 overflow-hidden">
      <img className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover" src={movie.image_url} alt={movie.title}/>
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#786343] to-[#786343a7] opacity-85" />
      <div className="w-full max-w-[500px] flex flex-col gap-4 z-[1] text-slate-100">
        <h1 className="text-5xl font-medium tracking-wide">{movie.title}</h1>
        <p className="text-sm">{movie.score} \ 100</p>
        <p className="text-sm leading-loose">{movie.description}</p>
      </div>
    </div>
  );
}
