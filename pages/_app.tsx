import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../src/contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  )
}

export default MyApp
