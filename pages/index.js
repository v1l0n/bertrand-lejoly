import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bertrand Lejoly design studio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Link href="/about">
                    <img src="/logo.png" alt="Bertrand Lejoly design studio logo" />
                </Link>
            </main>
        </div>
    )
}