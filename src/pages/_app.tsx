import { Box, ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Header } from "../components/Header";
import { theme } from "../styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>worldtrip</title>
    </Head>

    <ChakraProvider theme={theme}>
      <Header />

      <Box as="main" pb={10}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  </Fragment>
);

export default App;
