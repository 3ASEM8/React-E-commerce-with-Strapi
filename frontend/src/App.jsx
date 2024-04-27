// @ts-nocheck
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { ColorModeContext, useMode } from "./Theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <div className="App">
          <Header1 />
          <Header2 />
          <Header3 />

          <Box sx={{ bgcolor: theme.palette.bg.main, py: 9 }}>
            <Hero />
            <Main />
          </Box>
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
