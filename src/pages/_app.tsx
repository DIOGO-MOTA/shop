import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globals'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';

import Image from 'next/future/image'

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo"/>
      </Header>
       <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
