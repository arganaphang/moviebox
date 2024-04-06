export default function MovieCard() {
    return(
        <div className="">
            {/* Change Tag to IMG */}
            <div className="w-56 h-80 bg-slate-300"></div>
            <div className="mt-6 flex flex-col gap-3">
                <p className="font-medium text-sm text-gray-400">USA, 2016 - Current</p>
                <h3 className="font-medium text-2xl">Stranger Things</h3>
                <p className="text-xs">Score: 86.0 / 100</p>
                <p className="font-medium text-sm text-gray-400">Action, Adventure, Horror</p>
            </div>
        </div>
    );
}