import './App.css';
import TopButtons from "./components/TopButtons";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
        <TopButtons />
        <Router>
            <Routes>
                <Route path={'/letter-up'} element={<Game />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
