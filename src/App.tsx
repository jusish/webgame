import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./ui/Home";
import Navbar from "./components/Navbar";
import About from "./ui/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portifolio from "./ui/Portifolio";
import Contact from "./ui/Contact";
import News from "./ui/News";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/portifolio" Component={Portifolio}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/news" Component={News}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
