
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import About from "./pages/About";
import SharedLayout from "./pages/SharedLayout";
import Climate from "./pages/Climate";
import Digital from "./pages/Digital";
import Leaders from "./pages/Leaders";
import Connectus from "./pages/Connectus";
import MediaCenter from "./pages/MediaCenter";

import "../src/js/main"
import News from "./pages/News";
import Videos from "./pages/Videos";
import Images from "./pages/images";
import Events from "./pages/events";



function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/climate" element={<Climate />}/>
            <Route path="/digital" element={<Digital />}/>
            <Route path="/leaders" element={<Leaders />}/>
            <Route path="/connectus" element={<Connectus />}/>
          </Route>
        </Routes>
        <Routes>
          <Route path="/mediaCenter"  element={<MediaCenter />}>
              <Route index   element={<News />} />
              <Route path="/mediaCenter/images" element={<Images />} />
              <Route path="/mediaCenter/events" element={<Events />} />
              <Route path="/mediaCenter/connectus" element={<News />} />
              <Route path="/mediaCenter/videos" element={<Videos />} />
          </Route>
        </Routes>

      </Router>
   
    </div>
  );
}

export default App;
