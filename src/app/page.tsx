import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      {/* We will add more sections later */}
      <div className="h-[1000px]"></div> {/* Temp space to test scrolling */}
    </main>
  );
}