import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// const AboutImages = () => {
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
// }

export function Bbit () { return <Img fluid={data.bbit.childImageSharp.fluid} />; };
