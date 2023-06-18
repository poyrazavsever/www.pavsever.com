//Pages
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Writing/Blog"
import Post from "./Pages/Writing/Post"
import NotFound from "./Pages/NotFound"

// Components
import PreLoader from "./Components/PreLoader"
import Navbar from "./Components/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  
  
  
  return (
    <div>
      
      <PreLoader />

      <div className="container mx-auto -z-40">
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
