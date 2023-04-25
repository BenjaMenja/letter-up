import './App.css';
import TopButtons from "./components/TopButtons";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import Options from "./pages/Options";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        if (window.localStorage.length === 0) {
            let options = {
                wordLength: {
                    min: 7,
                    max: 15
                },
                timer: {
                    min: 5,
                    sec: 0
                },
                lobby: {
                    enabled: true
                }
            }
            window.localStorage.setItem("options", JSON.stringify(options))
        }
    })

  return (
    <div className="App">
        <TopButtons />
        <Router>
            <Routes>
                <Route path={'/letter-up'} element={<Game />} />
                <Route path={'/letter-up/rules'} element={<Rules />} />
                <Route path={'/letter-up/options'} element={<Options />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
