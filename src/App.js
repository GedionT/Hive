import "./styles/App.css";

// page import
import Home from "./pages/home";

// component import
import WeekPicker from "./components/weekPicker";
import DataCard from "./components/dataCard";

function App() {
  return (
    <div className="App">
      <Home />
      <WeekPicker />
      <DataCard />
    </div>
  );
}

export default App;
