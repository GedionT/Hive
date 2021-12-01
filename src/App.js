import './styles/App.css';

// page import
import Home from './pages/home';

// component import
import NavigationBar from './components/navigation';
import WeekPicker from './components/weekPicker';
import DataCard from './components/dataCard';

// import data
import { openData } from './services/mockData';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <br />
      <br />
      <center>
        <Home />
      </center>
      <div className="container">
        <WeekPicker />
      </div>
      <div className="flex">
        {openData.map((data, index) => {
          return <DataCard key={index} openData={data} />;
        })}
      </div>
    </div>
  );
}

export default App;
