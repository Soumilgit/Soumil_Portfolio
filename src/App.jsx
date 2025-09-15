import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // Displays web analytics once deployed!

import {
  Hero,
  About,
  Contact,
  Experience,
  Navbar,
  Tech,
  Achieve,
  Heatmap,
  Works,
  Certf,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div
            className='bg-hero-pattern bg-cover bg-fixed bg-no-repeat bg-center'
            style={{
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(255, 255, 255,0)",
            }}
          >
            <Navbar />
            <Hero />
          </div>
          <div className='relative z-0'>
            <StarsCanvas />
            <div className='relative z-10'>
              <About setAboutLoaded={() => {}} />
              <Experience />
              <Tech />
              <Achieve />
              <Heatmap />
              <Works />
              <Certf />
              <Contact />
            </div>
          </div>
        </div>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

// Didn't add custom scrollbar because of expected non-responsiveness of it.
export default App;