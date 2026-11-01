import Navbar from "../app/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">{/* Hero Section */}</section>

        <section id="projects">{/* Projects Section */}</section>

        <section id="shopify">{/* Shopify Section */}</section>
      </main>
    </>
  );
}
