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
                        <img src={image.formats.medium.url} />
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(process.env.API_URL + '/projects');
    var projects = await res.json();

    if (process.env.API_URL.startsWith('http://localhost')) {
        projects = projects.map(project => {
            project.image.url =  process.env.API_URL + project.image.url;
            project.image.formats.thumbnail.url =  process.env.API_URL + project.image.formats.thumbnail.url;
            project.image.formats.large.url =  process.env.API_URL + project.image.formats.large.url;
            project.image.formats.medium.url =  process.env.API_URL + project.image.formats.medium.url;
            project.image.formats.small.url =  process.env.API_URL + project.image.formats.small.url;
            return project;
        })
    }
    
    return {
      props: {
          projects
      }
    }
  }