import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css';
import Intro from './components/Intro';
function App() {
  return (
   <div>
    {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div> 
   </div>
  );
}

export default App;
