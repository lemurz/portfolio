import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Hero />
        <Navbar />
      </header>
      <main>
        <About />
        <Research />
        <Projects />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
