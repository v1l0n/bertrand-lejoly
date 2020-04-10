import React from "react"
import { Link } from "gatsby"

import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Bertrand Lejoly" description="Bertrand Lejoly design studio." />
    <div style={{ display: `table`, height: `100%`, width: `100%`, position: `absolute`, top: 0, left: 0 }}>
      <div style={{ display: `table-cell`, verticalAlign: `middle`, paddingLeft: `16px`, paddingRight: `16px` }}>
        <div style={{ maxWidth: `384px`, margin: `0 auto` }}>
          <Link to="/about/">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
