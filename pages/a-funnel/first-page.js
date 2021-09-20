import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          First Page
        </h1>

        <h2>Orders page usees dynamic segment has a directory</h2>
        <Link href="/orders/1234asdf?fid=a-funnel"><a>Order Page (will 404 after refresh of the page)</a></Link>
        <a href="/orders/1234asdf?fid=a-funnel">Order Page (regular link - will 404 immediately)</a>
        <br />
        <h2>Another page uses dynamic segment as js file</h2>
        <Link href="/another/1234asdf?fid=a-funnel"><a>Another Page (will 404 after refresh of the page)</a></Link>
        <a href="/another/1234asdf?fid=a-funnel">Another Page (regular link - will 404 immediately)</a>
      </main>
    </div>
  )
}
