import "./App.css";
import Header from "./pages/Home/Header";
import Herocomponent from "./pages/Home/Herocomponent";
import Footercomponent from "./pages/Home/Footercomponent";

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
