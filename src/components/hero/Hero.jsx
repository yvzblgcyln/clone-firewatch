import { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">
      <img src="img/background.png" style={{ transform: `translateY(${offsetY * 1}px)` }}></img>
      <img src="img/mountains.png" style={{ transform: `translateY(${offsetY * 0.95}px)` }}></img>
      <img src="img/logo_land.png" style={{ transform: `translateY(${offsetY * 0.85}px)` }}></img>
      <img src="img/jungle1.png" style={{ transform: `translateY(${offsetY * 0.8}px)` }}></img>
      <img src="img/jungle2.png" style={{ transform: `translateY(${offsetY * 0.7}px)` }}></img>
      <img src="img/jungle3.png" style={{ transform: `translateY(${offsetY * 0.6}px)` }}></img>
      <img src="img/jungle4.png" style={{ transform: `translateY(${offsetY * 0.4}px)` }}></img>
      <img
        src="img/man_on_mountain.png"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      ></img>
      <img src="img/jungle5.png"></img>
    </div>
  );
};

export default Hero;
