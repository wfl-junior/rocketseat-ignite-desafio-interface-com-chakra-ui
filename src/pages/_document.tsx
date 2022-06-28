import { Head, Html, Main, NextScript } from "next/document";

const Document: React.FC = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossorigin"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <meta name="author" content="Wallace Júnior | wflj1997@gmail.com" />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
