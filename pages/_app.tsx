import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { JetBrains_Mono } from 'next/font/google'
import clsx from 'clsx'

const jetbrainsmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsmono',
  fallback: ['monospace'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx(
        jetbrainsmono.variable,
        'font-mono grid grid-rows-[1fr_auto] grid-cols-[100%] min-h-screen'
      )}
    >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
