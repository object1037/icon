import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import clsx from 'clsx'

const JetBrainsMono = localFont({
  src: '../public/fonts/JetBrainsMono-var.woff2',
  variable: '--font-jetbrainsmono',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx(
        JetBrainsMono.className,
        'grid grid-rows-[1fr_auto] grid-cols-[100%] min-h-screen'
      )}
    >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
