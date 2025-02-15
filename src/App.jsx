import { BrowserRouter } from "react-router-dom";

import { Hero, About, Contact, Experience, Feedbacks, Navbar, Tech,Achieve, Works,Certf, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
  );
}

export default App;
