export default function TailwindDev() {
  const visible = import.meta.env.MODE === "development";
  if (!visible) {
    return null;
  }
  return (
    <div className="text-xs text-white tracking-widest fixed top-4 right-4 z-50 flex h-6 items-center justify-center rounded-full bg-gray-800 py-4 px-6 font-mono">
      <span className="block sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block">XL</span>
    </div>
  );
}
