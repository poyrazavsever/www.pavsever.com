//Pages
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Writing/Blog"
import Post from "./Pages/Writing/Post"
import NotFound from "./Components/NotFound"
import AnimatedCursor from "react-animated-cursor"

// Components
import PreLoader from "./Components/PreLoader"
import Navbar from "./Components/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  
  return (

    <>
      <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='163, 163, 163'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          'img',
          '.link'
        ]}
      />
      </div>

      <div className="overflow-x-hidden">

      <PreLoader />

        <div className="md:container md:mx-auto -z-40">
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
    </>
   
  );
}

export default App;
