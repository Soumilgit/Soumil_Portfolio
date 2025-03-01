import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; //Displays web analytics once deployed!

import { Hero, About, Contact, Experience, Feedbacks, Navbar, Tech, Achieve, Works, Certf, StarsCanvas } from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div
            className="bg-hero-pattern bg-cover bg-fixed bg-no-repeat bg-center"
            style={{
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(255, 255, 255,0)",
            }}
          >
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Achieve />
          <Works />
          <Certf />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
