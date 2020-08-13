import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bertrand Lejoly design studio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                { process.env.NEXT_PUBLIC_ENV != "production" &&
                    <meta name="robots" content="noindex"></meta>
                }
            </Head>

            <main className={styles.main}>
                <Link href="/about">
                    <a>
                        <img src="/logo.png" alt="Bertrand Lejoly design studio logo" />
                    </a>
                </Link>
            </main>
        </div>
    )
}