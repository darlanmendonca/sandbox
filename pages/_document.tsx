import Document, { Html, Head, Main, NextScript } from 'next/document'

class Page extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <base href="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Page
