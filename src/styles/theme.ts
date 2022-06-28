import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: "FFBA08",
    gray: {
      100: "#F5F8FA",
      300: "#DADADA",
      700: "#999999",
      900: "#47585B",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bgColor: "gray.100",
        color: "gray.900",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    },
  },
});
