import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // Displays web analytics once deployed!
import { ThemeProvider } from "./context/ThemeContext";

import {
  Hero,
  About,
  Contact,
  Experience,
  OpenSource,
  Navbar,
  Tech,
  Heatmap,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <ThemeProvider>
      <BrowserRouter>
        <div className='app-shell relative z-0 bg-primary'>
          <div
            className='hero-backdrop bg-hero-pattern bg-cover bg-fixed bg-no-repeat bg-center'
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
              <OpenSource />
              <Heatmap />
              <Works />
              <Tech />
              <Contact />
            </div>
          </div>
        </div>
      </BrowserRouter>
      </ThemeProvider>
      <Analytics />
    </>
  );
};

// Didn't add custom scrollbar because of expected non-responsiveness of it.
export default App;
