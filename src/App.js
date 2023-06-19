//Pages
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Writing/Blog"
import Post from "./Pages/Writing/Post"
import NotFound from "./Components/NotFound"
import AnimatedCursor from 'animated-cursor'

// Components
import PreLoader from "./Components/PreLoader"
import Navbar from "./Components/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  
  

  // let options = {
  //   color: '#a3a3a3',
  //   outerAlpha: 0.25,
  //   size: { 
  //     inner: 8, 
  //     outer: 38 
  //   },
  //   hoverScale: {
  //     inner: 0.5,
  //     outer: 1.4
  //   },
  //   clickScale: {
  //     inner: 1.4,
  //     outer: 0.1
  //   }
  // }

  // const cursor = AnimatedCursor(options)
  // cursor.init()

  return (
    <div>
      
      <div id="cursor" className="!z-50">
        <div id="cursor-outer"></div>
        <div id="cursor-inner"></div>
      </div>

      <PreLoader />

      <div className="md:container mx-auto -z-40">
        <Navbar/>
        

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/post/:id" element={<Post/> }/>
            <Route path="/404" element={<NotFound/> }/>
          </Routes>
        </div>

      </div>
      
    </div>
  );
}

export default App;
