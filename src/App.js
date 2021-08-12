import './App.css';
import Home from './home/Home'
import AboutUs from './about-us'
import Webinar from './webinar/Webinar'
import Projects from './projects';
import Prototype from './webinar/Prototype'
import Checkout from './checkout/Checkout'
import Header from './components/header';
import Footer from './components/footer'
import { BrowserRouter, Route } from 'react-router-dom'
import modules from './modules-info'

function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/modules'><Webinar modules={modules} /></Route>
        {modules.map(module => (
          <Route exact path={'/' + module.topic}><Prototype module={module} modules={modules}/></Route>
        ))}
        <Route exact path='/checkout'><Checkout modules={modules}/></Route>
        <Route exact path='/about-us'><AboutUs/></Route>
        <Route exact path='/projects'><Projects/></Route>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
