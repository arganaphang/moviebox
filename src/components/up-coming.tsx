import MovieCard from "./movie-card";

export default function UpComing() {
  return (
    <div className="mx-16">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">Up Coming</h2>
        <p className="text-red-500 text-xs">See more &rsaquo;</p>
      </div>
      <ul className="mt-8 flex gap-12">
        {[...Array(2).keys()].map((idx) => {
            return <MovieCard key={idx}/>
        })}
      </ul>
    </div>
  );
}
