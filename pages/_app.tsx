import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, ScreenProvider } from '../src/contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ScreenProvider>
        <Component {...pageProps} />
      </ScreenProvider>
      <Toaster position='bottom-center' />
    </AuthProvider>
  )
}

export default MyApp
