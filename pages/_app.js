import { ThemeProvider } from "styled-components";
import theme from "../utilities/styles/theme";
import GlobalStyles from "../utilities/styles/globalStyles";
import Navbar from "../components/universal/Navbar";
import Footer from "../components/universal/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme.colors}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
