import '@assets/chrome-bug.css'
import '@assets/index.css'
import 'focus-visible'
import store from '@app/store'
import type { AppProps } from 'next/app'
import { FunctionComponent, useEffect } from 'react'
import { Head } from '@components/common'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

const Noop: FunctionComponent = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ThemeProvider
        attribute={'class'}
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <Provider store={store}>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  )
}
