import './App.css';
import Home from './pages/home';
import Header from './components/styled/header';
import Footer from './components/styled/footer'
import { useContext, useState } from 'react';
import Context from './context';


function App() {

  const [pageState, setPageState] = useState(<Home />)
  const [headerState, setHeaderState] = useState({isAbsolute:false, isSticky:false})
  const context = useContext(Context)

  return (
    <div className="App">
      <div className='top-left-leaf'/>
      <div className='bottom-right-leaf'/>
      <Context.Provider value={{...context, state:pageState, setState:setPageState, setHeaderState:({isAbsolute=false, isSticky=false}) => setHeaderState({isAbsolute, isSticky})}}>
        <Header isAbsolute={headerState.isAbsolute} isSticky={headerState.isSticky}/>
        {pageState}
      </Context.Provider>
      <Footer/>
    </div>
  );
}

export default App;
