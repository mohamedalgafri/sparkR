
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from "./pages/About";
import SharedLayout from "./pages/SharedLayout";
import Climate from "./pages/Climate";
import Digital from "./pages/Digital";
import Leaders from "./pages/Leaders";
import Connectus from "./pages/Connectus";
import MediaCenter from "./pages/MediaCenter";

// import "../src/js/main"
import News from "./pages/News";
import Videos from "./pages/Videos";
import Images from "./pages/images";
import Events from "./pages/events";
import { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.js'
import ImagesDetels from "./pages/ImagesDetels";
import SignIn from "./pages/SignIn";
import LayoutSignIn from "./pages/LayoutSignIn";
import CreateAccount from "./pages/CreateAccount";
import Initiatives from "./pages/Initiatives";
import Profile from "./pages/Profile";
import { useState } from "react";
import NewsDetails from "./pages/NewsDetails";
import { LoginContextprovider } from "./context/ContextLogin";

function App() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, [])



  return (

    <div>
      <Router>
        <Routes>
          <Route path="/"  element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/climate" element={<Climate />}/>
            <Route path="/digital" element={<Digital />}/>
            <Route path="/leaders" element={<Leaders />}/>
            <Route path="/initiatives/:id" element={<Initiatives />}/>
            <Route path="/mediaCenter/newsDetails/:id" element={<NewsDetails />}/>
            <Route path="/connectus" element={<Connectus />}/>
            <Route path="/profile" element={<Profile />}/>
          </Route>

          <Route path="/mediaCenter"  element={<MediaCenter />}>
              <Route index   element={<News />} />
              <Route path="/mediaCenter/images" element={<Images />} />
              <Route path="/mediaCenter/images/imagesDetels" element={<ImagesDetels />} />
              <Route path="/mediaCenter/events" element={<Events />} />
              <Route path="/mediaCenter/connectus" element={<News />} />
              <Route path="/mediaCenter/videos" element={<Videos />} />
              
          </Route>

          <Route path="/signIn"  element={<LayoutSignIn />}>
              <Route index   element={<SignIn />} />
              <Route path="/signIn/createAccount"   element={<CreateAccount />} />
          </Route>
        </Routes>

      </Router>
   
    </div>
  );
}

export default App;
