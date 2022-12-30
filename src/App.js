import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Herocomponent from './Herocomponent';

import Footercomponent from './Footercomponent';

function App() {
  return (
    <div className="App">
     <Header/>

        <Herocomponent/>
       
      
      <Footercomponent/>
    </div>
  );
}

export default App;
