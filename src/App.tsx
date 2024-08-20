import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "./Pages/User";
import {Home} from "./Pages/Home";  
import React from 'react';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;