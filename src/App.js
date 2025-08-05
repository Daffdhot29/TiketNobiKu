import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css';
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
   <div>
    {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar/>
      </div> 
      
   </div>
  );
}

export default App;
