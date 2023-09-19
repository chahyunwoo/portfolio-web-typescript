import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AboutMe from "./pages/AboutMe";
import Archive from "./pages/Archive";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import Main from "./pages/Main";

import { useEffect, useState } from "react";

import theme from "./styles/theme";

function App() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div className="App" id="top">
        <Header />
        <Main />
        <AboutMe />
        <Skills />
        <Archive />
        <Projects />
        <Career />
        <Contact />
        <Footer />
        {<ScrollToTopButton scrollPos={scrollPos} />}
      </div>
    </ChakraProvider>
  );
}

export default App;
