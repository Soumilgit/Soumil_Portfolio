import { BrowserRouter } from "react-router-dom";
import { Hero, About, Contact, Experience, Feedbacks, Navbar, Tech, Achieve, Works, Certf, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    
      <style>
        {`
          
          .app-container {
            height: 100vh;
            overflow-y: auto;
            scroll-behavior: smooth;
          }

         
          .app-container::-webkit-scrollbar {
            width: 14px;
          }

        
          .app-container::-webkit-scrollbar-track {
            background: black;
            
            box-shadow: inset 0 0 5px #00ff00;
          }

          
          .app-container::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #00ff00, #007700);
            
            
            
            transition: all 0.2s ease-in-out;
          }

          
          .app-container::-webkit-scrollbar-thumb:before {
            content: "";
            display: block;
            height: 8px;
            width: 8px;
            background: #003300;
            
            box-shadow: 0 0 5px #00ff00;
            position: relative;
            left: 2px;
            top: 2px;
            animation: moveSnake 1.5s infinite alternate;
          }

        
          @keyframes moveSnake {
            0% { transform: translateY(-5px); }
            100% { transform: translateY(5px); }
          }

          
          .app-container::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #00ff00, #009900);
            box-shadow: 0 0 10px #00ff00, 0 0 20px #007700;
          }
        `}
      </style>

      <div className="app-container"> 
        <div className="relative z-0 bg-primary">
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

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
