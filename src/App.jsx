import "./App.css";
import artistImg from "../src/assets/Artist.png";
import frame1 from "../src/assets/Frame 1.png";
import frame2 from "../src/assets/Frame 2.png";
import frame3 from "../src/assets/Frame 3.png";
import Adrianan from "../src/assets/Adriana-Photoroom.png";
import TextBackground from "../src/assets/TextBackground2.png";
import Navbar from "./Components/Navbar";
import ContactSection from "./Components/ContactSection";

function App() {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const background = document.querySelector(".background");
    const Aud1 = document.querySelector(".Aud1");
    const Aud2 = document.querySelector(".Aud2");
    const artistImg = document.querySelector(".artistImg");

    // Apply parallax effect only to the background
    background.style.transform = `translateY(${scrollPosition * 0.5}px)`;

    // Apply parallax effect only to the closest Audiance
    Aud1.style.transform = `translateY(${scrollPosition * 0.6}px)`;
    // Apply parallax effect only to the closest Audiance
    Aud2.style.transform = `translateY(-${scrollPosition * 0.4}px)`;
    artistImg.style.transform = `translateY(${scrollPosition * 0.7}px)`;
  });

  return (
    <>
      <Navbar />
      <div className="section1">
        <div className="background"></div>
        <div className="artist">
          <img className="artistImg" src={artistImg} />
          <img className="HeroText" src={TextBackground} />
        </div>
        <div className="audiance">
          <img src={frame1} className="Aud1" alt="#" />
        </div>
        <div className="audiance2">
          <img src={frame2} className="Aud2" alt="#" />
        </div>
        <div className="audiance3">
          <img src={frame3} className="Aud3" alt="#" />
        </div>
        <div className="TextFont">
          <img src={Adrianan} className="Text" alt="#" />
        </div>
      </div>

      <div className="section2">
       <ContactSection/>
      </div>
    </>
  );
}

export default App;
