import './App.css';
import Home from './pages/home';
import Header from './components/styled/header';
import Footer from './components/styled/footer'
import { useContext, useState } from 'react';
import Context from './context';


function App() {

  const [pageState, setPageState] = useState(<Home />)
  const [headerState, setHeaderState] = useState({isAbsolute:false, isFixed:false})
  const context = useContext(Context)

  return (
    <div className="App">
      <div className='top-left-leaf'/>
      <div className='bottom-right-leaf'/>
      <Context.Provider value={{...context, state:pageState, setState:setPageState, setHeaderState:({isAbsolute=false, isFixed=false}) => setHeaderState({isAbsolute, isFixed})}}>
        <Header isAbsolute={headerState.isAbsolute} isFixed={headerState.isFixed}/>
        {pageState}
      </Context.Provider>
      <Footer/>
    </div>
  );
}

export default App;
