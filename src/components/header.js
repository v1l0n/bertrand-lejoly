import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Header = () => (
  <header style={{ marginBottom: '1.45rem' }}>
    <div style={{ maxWidth: 1024, padding: `1.45rem 1.0875rem`, margin: `0 auto`, display: `flex` }}>
      <div style={{ maxWidth: 256, flexGrow: 1, marginRight: `auto` }}>
        <Logo />
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', paddingLeft: '16px' }}>
        <Link to="/about/" style={{ paddingRight: '16px', color: 'black', textDecoration: 'none' }}>about</Link>
        <Link to="/contact/" style={{ color: 'black', textDecoration: 'none' }}>contact</Link>
      </nav>
    </div>
  </header>
)

export default Header
