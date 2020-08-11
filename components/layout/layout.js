import Head from 'next/head'
import Topbar from '../topbar/topbar'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bertrand Lejoly</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Topbar />

            <main className={styles.main}>{children}</main>
        </div>
    )
}