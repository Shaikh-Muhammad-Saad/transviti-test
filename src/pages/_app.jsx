import MainLayout from '@/components/layout/main-layout';
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <MainLayout page={page} />);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

