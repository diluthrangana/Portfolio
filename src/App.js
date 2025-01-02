import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Routes>
          <Route 
            path="/Portfolio" 
            element={
              <>               
                <Services />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/Portfolio/projects" 
            element={
            <>            
            <Projects />
            <Footer />
            </>
            } 
          />
          <Route 
            path="/Portfolio/skills" 
            element={
            <>            
            <Skills />
            <Footer />
            </>
            } 
          />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
