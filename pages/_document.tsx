import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>QR Code Generator | createxp</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <body className="bg-neutral-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
