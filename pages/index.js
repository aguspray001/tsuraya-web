import Footer from "../components/Footer";
import Catalog from "../components/home/Catalog";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Tsuraya | Home Page" description="Home Page">
      <Hero />
      <Catalog />
      <Footer />
    </Layout>
  );
}
