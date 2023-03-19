import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/monument-extended"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-black text-neutral-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
