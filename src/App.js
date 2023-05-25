import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Companies from "./Pages/Companies";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/companies' element={<Companies/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

     </Routes>
    </>
  );
}

export default App;
