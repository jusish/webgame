import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
