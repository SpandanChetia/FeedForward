import "./App.css";
import React from "react";
import {Route,Routes} from 'react-router-dom';
import { Stack } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Donation from "./pages/Donation";
import Inventory from "./pages/Inventory";
import SignUp from "./pages/SignUp";
import NourishInitiative from "./pages/NourishInitiative";
import Login from "./pages/Login";

function App() {
  return (
    <Stack minHeight={'100vh'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/donation" element={<Donation/>} />
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/nourishinitiative" element={<NourishInitiative/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer />
    </Stack>
  );
}

export default App;
