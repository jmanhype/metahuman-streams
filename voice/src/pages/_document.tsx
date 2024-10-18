import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            src="/metahuman-stream/web/srs.sdk.js"
            async
            defer
            onLoad={() => {
              console.log('SRS SDK script loaded');
              window.dispatchEvent(new Event('srs_sdk_loaded'));
            }}
            onError={(e) => console.error('Error loading SRS SDK script:', e)}
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

export default MyDocument