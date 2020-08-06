import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bertrand Lejoly | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.resume}>
                    <p>Graduating from Saint-Luc Liège, Belgium in 2002, Bertrand Lejoly started his career first in Germany then in Italy in Milan with Matteo Thun & Partners. Moving back to Belgium in 2013, he took over as head of Vincent Van Duysen's design department, with whom, since nearly seven years he is collaborating on lines for, among others, Molteni&C, B&B Italia, Flos, Kettal, Dada, Paola Lenti and Serax.</p>
                    <p>In 2019 hes founded is own studio in Antwerp, embarking on a series of collaborations with major brands in the sectors of furniture, lighting, sanitary, as well as on tableware products.</p>
                </div>
                <div className={styles.mugshot}>
                    <img src="/bl-mugshot.jpg" alt="Bertrand Lejoly" height="300" />
                </div>
            </main>
        </div>
    )
}