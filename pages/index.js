import Footer from "../components/Footer";
import Catalog from "../components/home/Catalog";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout";
import NextLayout from "../components/NextLayout";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <NextLayout title="Tsuraya | Build the things easily" description="">
      <div class="pt-20">
        <Hero />
        <Catalog />
        <Footer />
        <div class="fixed bottom-10 right-10">
          <ScrollToTop />
        </div>
      </div>
    </NextLayout>
  );
}
