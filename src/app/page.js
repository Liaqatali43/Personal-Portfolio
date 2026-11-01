import Navbar from "../app/components/layout/Navbar";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects">{/* Projects Section */}</section>

        <section id="shopify">{/* Shopify Section */}</section>
      </main>
    </>
  );
}
