import logo from './logo.svg';
import './App.css';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import PageThree from './components/pageThree';
import { useState } from 'react';

function App() {

  const [step,setStep]=useState(1);

  function submit1()
  {
    debugger
    
      setStep(step+1);
      if(step===3)
      {
        setStep(1)
      }
    
    
  }

  return (
    <div className="App">
      {
        step===1?<PageOne submit={()=>submit1()}/>:null
      }
        {
        step===2?<PageTwo submit={submit1}/>:null
      }
        {
        step===3?<PageThree submit={submit1}/>:null
      }
    
    
    </div>
    

  );
}

export default App;
