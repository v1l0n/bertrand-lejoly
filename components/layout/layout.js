import Head from 'next/head'
import Topbar from '../topbar/topbar'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bertrand Lejoly</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                { process.env.NEXT_PUBLIC_ENV != "production" &&
                    <meta name="robots" content="noindex"></meta>
                }
            </Head>

            <Topbar />

            <main className={styles.main}>{children}</main>
        </div>
    )
}