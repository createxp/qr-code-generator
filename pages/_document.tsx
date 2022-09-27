import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
        <title>QR Code Generator | createxp</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        <link href="http://fonts.cdnfonts.com/css/euclid-circular-a" rel="stylesheet" />
      </Head>
      <body className='bg-neutral-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}