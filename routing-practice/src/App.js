import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/home"/>
        {/* If you put http://localhost:3000/home, it would direct you to the home component */}
        <Route element={<ParamsComponent />} path="/:word" />
        {/* If you put http://localhost:3000/hello, it would direct you to the params component */}
        <Route element={<ParamsComponent />} path="/:word/:color/:bgCol" />
        {/* http://localhost:3000/target/green/blue */}
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;