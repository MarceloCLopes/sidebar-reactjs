import { createContext, useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./App.Routes";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar | Marcelo Lopes</title>
        </Helmet>
        <>
          <Layout>
            <AppRoutes />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
