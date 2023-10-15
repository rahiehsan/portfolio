import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;



