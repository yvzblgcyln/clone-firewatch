import "./app.css";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Trailer from "./components/trailer/Trailer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Trailer />
      <Details />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
