import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer'
import { useContext, useState } from 'react';
import Context from './context';


function App() {

  const [pageState, setPageState] = useState(<Home />)
  const context = useContext(Context)

  return (
    <div className="App">
      <div className='top-left-leaf'/>
      <div className='bottom-right-leaf'/>
      <Context.Provider value={{...context, state:pageState, setState:setPageState}}>
      {pageState}
      <Header/>
      </Context.Provider>
      <Footer/>
    </div>
  );
}

export default App;
