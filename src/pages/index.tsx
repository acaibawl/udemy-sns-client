import Image from 'next/image'
import { Inter } from 'next/font/google'
import TimeLine from '@/components/TimeLine'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SNS Udemu</title>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
      </Head>

      <div>
        <TimeLine />
      </div>
    </>
  )
}
