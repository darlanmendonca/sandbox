import type { NextPage } from 'next'
import Head from 'next/head'
import Container from 'lib/container/container.component'
import Cases from 'lib/cases/cases.component'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cases>
        <h1>
          Welcome to my <strong>Sandbox!</strong>
        </h1>

        <p>some cases soon</p>
      </Cases>
    </Container>
  )
}

export default Home
