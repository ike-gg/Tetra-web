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
        <link
          href="https://fonts.cdnfonts.com/css/gg-sans-2"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Tetra Discord Bot, emote management."
        />
        <meta
          name="keywords"
          content="tetra tetrabot bot discord emotes emote 7tv bttv ffz import "
        />
        <meta name="theme-color" content="#000000" />
        <meta name="og:image" content="https://i.imgur.com/vkJxLA2.png" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <body className="bg-black text-neutral-100" style={{ width: "100%" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
