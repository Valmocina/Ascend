import Contact from "./components/Contact/Contact.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Process from "./components/Process/Process.jsx";
import Services from "./components/Services/Services.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="app__main">
        <Hero />
        <Services />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
