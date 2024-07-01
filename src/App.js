import About from "./components/About";
import Navbar from "./components/Navbar";
import TextUtils from "./components/TextUtils";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar title='TextUtils' about='About Us' />
        <div className="container mb-30">
        <Routes>
          <Route exact path='/' element={<TextUtils/>}/>
          <Route exact path='/about' element={<About/>} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
