import './App.css';
import NavBar from './components/common/NavBar';
import ProgressBar from './components/common/ProgressBar';
// import FeaturedProject from './components/home/FeaturedProject';
import Header from './components/home/Header';
import Projects from './components/home/Projects';

function App() {
  return (
    <div className='bg-vampire-black'>
      <ProgressBar/>
      <NavBar/>
      <Header/>
      {/* <FeaturedProject/> */}
      <Projects/>
    </div>
  );
}

export default App;
