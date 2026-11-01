import Navbar from "../app/components/layout/Navbar";
import Expertise from "./components/sections/Expertise";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Capabilities from "./components/sections/Capabilities";
import ShopifySpecialist from "./components/sections/ShopifySpecialty";
import Process from "./components/sections/Process";

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

        <section id="shopify">
          <ShopifySpecialist />
        </section>

        <section>
          <Capabilities />
        </section>

        <section>
          <Process />
        </section>
      </main>
    </>
  );
}
