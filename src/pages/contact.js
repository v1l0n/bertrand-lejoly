import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <>
    <SEO title="contact" />
    <Layout>
      <div style={{ maxWidth: '256px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '15%' }}>
        Statiestraat 65<br />
        2600 Antwerp, Belgium<br />
        +32 486 179176<br />
        mail@bertrandlejoly.com
      </div>
    </Layout>
  </>
)

export default ContactPage
