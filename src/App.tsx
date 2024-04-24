import Banner from "./components/banner";
import Footer from "./components/footer";
import Popular from "./components/popular";
import TailwindDev from "./components/tailwind-dev";
import TopRated from "./components/top-rated";
import UpComing from "./components/up-coming";

export default function App() {
  return (
    <>
      <Banner />
      <TopRated />
      <Popular />
      <UpComing />
      <Footer />
      <TailwindDev />
    </>
  );
}
