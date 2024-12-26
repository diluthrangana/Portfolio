import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Banner />
                <Services />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/projects" 
            element={
            <>
            <Banner />
            <Projects />
            </>
            } 
          />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
