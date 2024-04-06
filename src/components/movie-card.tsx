import Movie from "../types/movie";

type Props = {
    movie: Movie
};

export default function MovieCard({movie}: Props) {
    return(
        <div className="w-56 shrink-0">
            <img className="w-full h-80 object-cover" src={movie.image_url} alt={movie.title}/>
            <div className="mt-6 flex flex-col gap-3">
                <p className="font-medium text-sm text-gray-400">{movie.year}</p>
                <h3 className="font-medium text-2xl">{movie.title}</h3>
                <p className="text-xs">Score: {movie.score}/ 100</p>
                <p className="font-medium text-sm text-gray-400">{movie.keywords.join(", ")}</p>
            </div>
        </div>
    );
}