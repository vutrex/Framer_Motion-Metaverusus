
import './App.css';
import About from './Components/About';
import Explore from './Components/Explore';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import Getstarted from './Components/Getstarted';
import Hero from './Components/Hero';
import Insights from './Components/Insights';
import Navbar from './Components/Navbar';
import Whatsnew from './Components/Whatsnew';
import World from './Components/World';

function App() {
  return (
<div className="App bg-black overflow-hidden">
    <Navbar/>
    <Hero/>
    {/* positioning the components in relative  */}
    <div className='relative'>
        {/* writing down the comps and self closing div for rendering gradients  */}
        <About/>
          <div className='gradient-03 z-0'/>
        <Explore/>
    </div>

    <div className='relative'>
        <Getstarted/>
          <div className='gradient-04 z-0'/>
        <Whatsnew/>
    </div>

      <World/>

    <div className='relative'>
        <Insights/>
          <div className='gradient-04 z-0'/>
        <Feedback/>
    </div>
    <Footer/>
</div>
  );
}

export default App;
