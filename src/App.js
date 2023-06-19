import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import { Stack } from "@mui/material";


function App() {
  return (
    <Stack minHeight={'100vh'}>
      <Navbar />
      <Home/>
      <Footer />
    </Stack>
  );
}

export default App;
