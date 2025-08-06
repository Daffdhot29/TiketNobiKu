import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Action from './components/Action';
function App() {
  return (
   <div>
    {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div> 
    {/* End Intro Section */}

    {/* Trending Section */}
    <div className='trendingSection'>
      <Trending/>
    </div>
    {/* End Trending Section */}

    {/* Action Section */}
    <div className='actionSection'>
      <Action/> 
    </div>
   </div>
  );
}

export default App;
