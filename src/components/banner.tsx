export default function Banner() {
  return (
    <div className="h-[640px] bg-gradient-to-b from-[#0303035a] to-[#030303db] px-16 flex flex-col justify-center relative">
      <img
        src="https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg"
        alt="John Wick 3 : Parabellum"
        className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0 z-[-1]"
      />
      <div className="flex flex-col items-start gap-4 md:w-2/3 lg:w-1/2 text-white">
        <h1 className="text-5xl font-bold line-clamp-2">
          John Wick 3 : Parabellum
        </h1>
        <p className="text-xs flex items-center gap-1">
          <span className="p-1 rounded-sm bg-yellow-400 font-bold">IMDb</span>
          86.0 / 100
        </p>
        <p className="text-lg line-clamp-4">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <a
          href="https://youtube.com"
          target="_blank"
          className="inline-block uppercase px-6 py-3 rounded-md bg-red-700 tracking-wider font-medium"
        >
          Watch Trailer
        </a>
      </div>
    </div>
  );
}
