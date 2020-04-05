import React from "react";
import { ThemeProvider } from "styled-components";
import WithNavbar from "./shared/components/navigation/WithNavbar";
import WithRouter from "./Router";

const appTheme = {
  primary: "#51ccc5",
  secondary: "#ffd099",
  warning: "#ff5a26",
  danger: "#ff4657",
  info: "#2796f1",
  notification: "#7bff74",
};

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <WithNavbar />
      <WithRouter />
    </ThemeProvider>
  );
};
export default App;
