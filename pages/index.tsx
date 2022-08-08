import type { NextPage } from 'next'
import Head from 'next/head'
import Icon from '../components/icon'
import { useState } from 'react'

const Home: NextPage = () => {
  const [hair, setHair] = useState('')
  const [eye, setEye] = useState('')

  return (
    <>
    <Head>

    </Head>
    <main>
      <div>
        <Icon width={256} height={256} hair={hair} eye={eye} />
      </div>
    </main>
    </>
  )
}

export default Home
