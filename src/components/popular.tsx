import MovieCard from "./movie-card";

export default function Popular() {
  return (
    <div className="mx-16">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">Popular</h2>
        <p className="text-red-500 text-xs">See more &rsaquo;</p>
      </div>
      <ul className="mt-8 flex gap-12 overflow-x-auto pb-6">
        {[...Array(10).keys()].map((idx) => {
            return <MovieCard key={idx}/>
        })}
      </ul>
    </div>
  );
}
