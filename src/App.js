import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import WithRouter from "./Router";

const WithGlobalStyle = createGlobalStyle`
  body {
    background: #6e6e6e;
  }
`;

const appTheme = {
  primary: "#F9FEFF",
  secondary: "#ffd099",
  warning: "#ff5a26",
  danger: "#ff4657",
  info: "#2796f1",
  notification: "#7bff74",
  navText: "#0020cb",
  icons: "#af0049",
};

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <WithRouter />
      <WithGlobalStyle />
    </ThemeProvider>
  );
};
export default App;
