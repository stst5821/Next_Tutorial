import '../styles/globals.css'

// すべてのページでいくつかのCSSを読み込みたい場合は、ここに記述する。
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
