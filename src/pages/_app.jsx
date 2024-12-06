import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

