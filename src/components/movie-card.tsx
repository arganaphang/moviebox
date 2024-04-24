import { Heart } from "react-feather";
export default function MovieCard() {
  return (
    <div className="">
      {/* Change Tag to IMG */}
      <div className="w-56 h-80 bg-slate-300 relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://media.themoviedb.org/t/p/w440_and_h660_face/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
          alt="The Dune"
        />
        <div className="p-3 rounded-full bg-[#d3d3d386] absolute top-0 right-0 m-4">
          <Heart className="w-6 h-6 stroke-gray-300 fill-gray-300" />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <p className="font-medium text-sm text-gray-400">USA, 2016 - Current</p>
        <h3 className="font-medium text-2xl">Stranger Things</h3>
        <p className="text-xs flex items-center gap-1">
          <span className="p-1 rounded-sm bg-yellow-400 font-bold">IMDb</span>
          86.0 / 100
        </p>
        <p className="font-medium text-sm text-gray-400">
          Action, Adventure, Horror
        </p>
      </div>
    </div>
  );
}
