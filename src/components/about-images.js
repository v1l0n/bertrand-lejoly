import { graphql, useStaticQuery } from "gatsby"

const ImageFragment = useStaticQuery(graphql`
    fragment ImageFragment on File {
        childImageSharp {
            fluid(maxHeight: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`);

const AboutImages = useStaticQuery(graphql`
  query {
    bbitImg: file(relativePath: { eq: "images/BBIT_composed.jpg" }) {
      ...ImageFragment
    }

    blImg: file(relativePath: { eq: "images/bl.jpg" }) {
      ...ImageFragment
    }

    dornbrachtImg: file(relativePath: { eq: "images/12_Gentle.jpg" }) {
      ...ImageFragment
    }
  }
`);

export default AboutImages;