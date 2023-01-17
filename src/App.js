import "./App.css";
import Header from "./Components/Header";
import Herocomponent from "./Components/Herocomponent";
import Footercomponent from "./Components/Footercomponent";

function App() {
  return (
    <div className="App page-wrap">
      <Header />
      <Herocomponent />
      <Footercomponent />
    </div>
  );
}

export default App;
