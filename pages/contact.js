import Head from 'next/head'
import Layout from '../components/layout/layout'
import styles from '../styles/contact.module.css'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Bertrand Lejoly | Contact</title>
            </Head>

            <div className={styles.address}>
                Statiestraat 65<br />
                2600 Antwerp, Belgium<br />
                +32 486 179176<br />
                mail@bertrandlejoly.com
            </div>
        </Layout>
    )
}
