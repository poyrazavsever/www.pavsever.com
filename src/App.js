import AnimatedCursor from "react-animated-cursor";

// Pages
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Writing/Blog";
import Certificates from "./Pages/Certificates";
import NotFound from "./Components/NotFound";
import Equipment from "./Pages/Equipment";
import Bookmarks from "./Pages/Bookmarks";
import UIWorks from "./Pages/UIWorks";
import Resume from "./Pages/Resume";
import TechStack from "./Pages/TechStack";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Admin/Login"; // Login sayfası
import AdminPanel from "./Pages/Admin/AdminPanel"; // Admin Paneli

// Components
import PreLoader from "./Components/PreLoader";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute"; // PrivateRoute bileşeni

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="163, 163, 163"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            "img",
            ".link",
          ]}
        />
      </div>

      <div>
        <PreLoader />

        <div className="md:container md:mx-auto -z-40">
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/my-equipment" element={<Equipment />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/uiworks" element={<UIWorks />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/techstack" element={<TechStack />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/login" element={<Login />} />
              
              {/* Admin Panel için PrivateRoute */}
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminPanel />
                  </PrivateRoute>
                }
              />
              {/* 404 - Sayfa bulunamadı */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
