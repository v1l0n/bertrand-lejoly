import Head from 'next/head'
import Layout from '../components/layout/layout'
import styles from '../styles/about.module.css'

export default function About({ projects }) {
    return (
        <Layout>
            <Head>
                <title>Bertrand Lejoly | About</title>
            </Head>
            
            <div className={styles.resume}>
                <div>
                    <p>Graduating from Saint-Luc Liège, Belgium in 2002, Bertrand Lejoly started his career first in Germany then in Italy in Milan with Matteo Thun & Partners. Moving back to Belgium in 2013, he took over as head of Vincent Van Duysen's design department, with whom, since nearly seven years he is collaborating on lines for, among others, Molteni&C, B&B Italia, Flos, Kettal, Dada, Paola Lenti and Serax.</p>
                    <p>In 2019 hes founded is own studio in Antwerp, embarking on a series of collaborations with major brands in the sectors of furniture, lighting, sanitary, as well as on tableware products.</p>
                </div>
                <img src="/bl-mugshot.jpg" alt="Bertrand Lejoly" />
            </div>

            <div className={styles.projects}>

                <p>Excerpt of projects in collaboration with Vincent Van Duysen Architects (2013 until today):</p>

                {projects.map(({ id, description, image }) => (
                    <div key={id} className={styles.project}>
                        <img src={(process.env.NEXT_PUBLIC_ENV == 'development') ?
                            process.env.NEXT_PUBLIC_API_URL + image.formats.medium.url :
                            image.formats.medium.url}
                        />
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    console.log(`[***RL***] API_URL: ${process.env.API_URL}`);
    const res = await fetch(process.env.API_URL + '/projects');
    const projects = await res.json();
    
    return {
      props: {
          projects
      }
    }
  }