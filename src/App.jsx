import "./styles.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
