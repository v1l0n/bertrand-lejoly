import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PictureBL from "../components/picture-bl"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bb: file(relativePath: { eq: "BBIT_composed.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      serax: file(relativePath: { eq: "VVDA_2018_SERAX_PASSE-PARTOUT_Siska.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      franck: file(relativePath: { eq: "Franck_for_Sutherland_composed.png" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      fantini: file(relativePath: { eq: "124_125_MOOD_SANTI_CALECA_2017.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      molteni: file(relativePath: { eq: "01-Molteni Paul_01_composed.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      flos: file(relativePath: { eq: "Infra-Structure_Van Duysen.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      lenti: file(relativePath: { eq: "Portofino_2017.03_composed.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      zwilling: file(relativePath: { eq: "ZWILLING_Pro-1_composed.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },

      dornbracht: file(relativePath: { eq: "12_Gentle.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About" />
      <Layout>
        <div style={{ display: 'flex'}}>
          <div style={{ width: '75%', marginRight: '8px' }}>
            <p>Graduating from Saint-Luc Liège, Belgium in 2002, Bertrand Lejoly started his career first in Germany then in Italy in Milan with Matteo Thun & Partners. Moving back to Belgium in 2013, he took over as head of Vincent Van Duysen's design department, with whom, since nearly seven years he is collaborating on lines for, among others, Molteni&C, B&B Italia, Flos, Kettal, Dada, Paola Lenti and Serax.</p>
            <p>In 2019 hes founded is own studio in Antwerp, embarking on a series of collaborations with major brands in the sectors of furniture, lighting, sanitary, as well as on tableware products.</p>
          </div>
          <div style={{ width: '20%' }}><PictureBL /></div>
        </div>
        <p style={{ paddingTop: '64px' }}>Excerpt of projects in collaboration with Vincent Van Duysen Architects (2013 until today):</p>
        
        <Img fluid={data.bb.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Pablo for B&B Italia, 2019, icw Vincent Van Duysen Architects</p>

        <Img fluid={data.serax.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Passe-Partout for Serax, 2019, icw Vincent Van Duysen Architects</p>

        <Img fluid={data.franck.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Franck for David Sutherland, 2018, icw Vincent Van Duysen Architects</p>

        <Img fluid={data.fantini.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Icona for Fantini, 2016, icw Vincent Van Duysen Architects</p>

        <Img fluid={data.molteni.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Paul for Molteni&C, 2016, icw Vincent Van Duysen Architects</p>

        <Img fluid={data.flos.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Infra-Structure for Flos, 2016, icw Vincent Van Duysen Architects</p>

        <Img fluid={data.lenti.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Portofino for Paola Lenti, 2014, icw Vincent Van Duysen Architects</p>
        <p style={{ paddingTop: '64px' }}>Excerpt of projects in collaboration with Matteo Thun & Partners (2006 - 2013):</p>

        <Img fluid={data.zwilling.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Pro for Zwilling J.A. Henckels, 2011, icw Matteo Thun & Partners</p>

        <Img fluid={data.dornbracht.childImageSharp.fluid} />
        <p style={{ paddingBottom: '64px' }}>Gentle for Dornbracht, 2011, icw Matteo Thun & Partners</p>      
      </Layout>
    </>
  );
}

export default AboutPage;
