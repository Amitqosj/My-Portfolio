import { Route, Routes } from 'react-router-dom';
import "tailwindcss";
import Home from './pages/Home';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { useThemeStore } from './usethemestore';

function App() {
const {theme}=useThemeStore();

  return (
    <div data-theme={theme}>
    <Header/>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/contact" element={<Contact/>} />
     
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
