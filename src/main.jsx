import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, GlobalStyle } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: {
    100: "#f3f2ee",
  },
};

const theme = extendTheme({ colors });

const GlobalStyles = () => (
  <GlobalStyle
    styles={{
      body: {
        backgroundColor: colors.background[100],
      },
    }}
  />
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);