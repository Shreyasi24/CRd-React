import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./Component/Users";
import List from './Component/List';
import Home from "./Component/Home";
import Navbar from "./layouts/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
