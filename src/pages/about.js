import React from "react"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PictureBL from "../components/picture-bl"
import PictureBB from "../components/picture-bb"
import PictureSerax from "../components/picture-serax"
import PictureFranck from "../components/picture-franck"
import PictureFantini from "../components/picture-fantini"
import PictureMolteni from "../components/picture-molteni"
import PictureFlos from "../components/picture-flos"
import PictureLenti from "../components/picture-lenti"
import PictureDornbracht from "../components/picture-dornbracht"
import PictureZwilling from "../components/picture-zwilling"

const AboutPage = () => (
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
      <PictureBB />
      <p style={{ paddingBottom: '64px' }}>Pablo for B&B Italia, 2019, icw Vincent Van Duysen Architects</p>
      <PictureSerax />
      <p style={{ paddingBottom: '64px' }}>Passe-Partout for Serax, 2019, icw Vincent Van Duysen Architects</p>
      <PictureFranck />
      <p style={{ paddingBottom: '64px' }}>Franck for David Sutherland, 2018, icw Vincent Van Duysen Architects</p>
      <PictureFantini />
      <p style={{ paddingBottom: '64px' }}>Icona for Fantini, 2016, icw Vincent Van Duysen Architects</p>
      <PictureMolteni />
      <p style={{ paddingBottom: '64px' }}>Paul for Molteni&C, 2016, icw Vincent Van Duysen Architects</p>
      <PictureFlos />
      <p style={{ paddingBottom: '64px' }}>Infra-Structure for Flos, 2016, icw Vincent Van Duysen Architects</p>
      <PictureLenti />
      <p style={{ paddingBottom: '64px' }}>Portofino for Paola Lenti, 2014, icw Vincent Van Duysen Architects</p>
      <p style={{ paddingTop: '64px' }}>Excerpt of projects in collaboration with Matteo Thun & Partners (2006 - 2013):</p>
      <PictureZwilling />
      <p style={{ paddingBottom: '64px' }}>Pro for Zwilling J.A. Henckels, 2011, icw Matteo Thun & Partners</p>
      <PictureDornbracht />
      <p style={{ paddingBottom: '64px' }}>Gentle for Dornbracht, 2011, icw Matteo Thun & Partners</p>      
    </Layout>
  </>
);

export default AboutPage;
