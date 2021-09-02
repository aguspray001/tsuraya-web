import Footer from "../components/Footer";
import Catalog from "../components/home/Catalog";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <Layout title="Tsuraya | Home Page" description="Home Page">
      <Hero />
      <Catalog />
      <Footer />
      <div class="fixed bottom-10 right-10">
        <ScrollToTop />
      </div>
    </Layout>
  );
}
