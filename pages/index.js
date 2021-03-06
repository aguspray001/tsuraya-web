import Footer from "../components/Footer";
import Catalog from "../components/home/Catalog";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import NextLayout from "../components/NextLayout";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <NextLayout title="Tsuraya | Build the things easily" description="">
      <Hero />
      <Catalog />
      <Projects />
      <div className="fixed bottom-10 right-10">
        <ScrollToTop />
      </div>
    </NextLayout>
  );
}
