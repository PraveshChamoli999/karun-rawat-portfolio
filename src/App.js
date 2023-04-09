import { AboutMe, Home, ReasearchandTech } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-me" exact element={<AboutMe />} />
          <Route
            path="/research-technology"
            exact
            element={<ReasearchandTech />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
