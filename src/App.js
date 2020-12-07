import logo from './logo.svg';
import './App.css';
import Home from './home/Home'
import Webinar from './webinar/Webinar'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/webinars'><Webinar /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
