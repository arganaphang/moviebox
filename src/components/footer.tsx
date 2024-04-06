import { Facebook, Instagram, Youtube, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 pb-24">
      <div className="flex gap-12">
        <Facebook className="stroke-black w-6 h-6" />
        <Instagram className="stroke-black w-6 h-6" />
        <Youtube className="stroke-black w-6 h-6" />
        <Twitter className="stroke-black w-6 h-6" />
      </div>
      <div className="flex gap-12 font-medium">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="text-gray-400 font-medium">&copy; {new Date().getFullYear()} MovieBox by Arga</p>
    </footer>
  );
}
