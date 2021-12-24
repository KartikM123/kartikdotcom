import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppComponent } from './Components/AppComponent';

function App() {
      return (      
         <Router>
              <Routes>
               <Route path="/" element={<AppComponent />}/>
             </Routes>
        </Router>
      );
    }   

export default App;
