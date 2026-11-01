import Navbar from "../app/components/layout/Navbar";
import Expertise from "./components/sections/Expertise";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Capabilities from "./components/sections/ShopifySpecialty";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="expertise">
          <Expertise />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section>
          <Capabilities />
        </section>
      </main>
    </>
  );
}
