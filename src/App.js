import {
  AboutMe,
  Home,
  NewsAndHighlights,
  Publications,
  ReasearchandTech,
  TeamAndMembers,
  TrainingAndWorkshops,
  Technology,
  IndustryCorner,
  StudentCorner,
  Contact,
  WaveformPA,
  EfficientWireless,
  StrategicArea,
  Transmitter5G,
  RFPowerAmplifiers,
  RFIntegratedCircuits,
  TurnkeySolutions
} from "./pages";


import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, Hero } from "./components";
import ScrollToContent from "./components/ScrollToContent";

function App() {
  const location = useLocation();
  // Add all routes where you want NO top padding - including home route
  const noPaddingRoutes = ["/", "/student-corner", "/industry-corner", "/technology"];
  const isNoPadding = noPaddingRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Header />
      
      {/* Main content with conditional padding */}
      <div className={isNoPadding ? "" : "pt-20 lg:pt-20"}>
        <ScrollToContent />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-me" exact element={<AboutMe />} />
          <Route
            path="/research-technology"
            exact
            element={<ReasearchandTech />}
          />
          <Route path="/publications" exact element={<Publications />} />
          <Route
            path="/training-workshops"
            exact
            element={<TrainingAndWorkshops />}
          />
          <Route path="/team-members" exact element={<TeamAndMembers />} />
          <Route path="/news-highlights" exact element={<NewsAndHighlights />} />
          <Route path="/technology" exact element={<Technology />} />
          <Route path="/industry-corner" exact element={<IndustryCorner />} />
          <Route path="/student-corner" exact element={<StudentCorner />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/waveform-pa" element={<WaveformPA />} />
          <Route path="/efficient-wireless" element={<EfficientWireless />} />
          <Route path="/strategic-area" element={<StrategicArea />} />
          <Route path="/5g-transmitter" element={<Transmitter5G />} />

          <Route path="/rf-power-amplifiers" element={<RFPowerAmplifiers />} />
          <Route path="/rf-integrated-circuits" element={<RFIntegratedCircuits />} />
          <Route path="/turnkey-solutions" element={<TurnkeySolutions />} />

        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;