import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const JetBrainsMono = localFont({
  src: '../public/fonts/JetBrainsMono-var.woff2',
  variable: '--font-jetbrainsmono',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={JetBrainsMono.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
