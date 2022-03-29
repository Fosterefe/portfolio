import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects';
import About from './pages/About'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
<BrowserRouter>
    <div className='Menu'>
      <NavBar />
    </div>
    <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />} />
    </Routes>
</BrowserRouter>
);
}

export default App;
