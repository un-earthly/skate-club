import Head from 'next/head'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>

        <div className="text-3xl">
          home
        </div>
      </body>
    </>
  )
}
