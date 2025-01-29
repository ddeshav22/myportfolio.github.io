import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Navbar/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";


function App() {
  

  return <div className="bg-[#171d32] h-auto w-full overflow-hidden" >
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
    <Footer/>
  </div>
}

export default App;
