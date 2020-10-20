import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anemperfeina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Backoffice</h1>
    </div>
  )
}
