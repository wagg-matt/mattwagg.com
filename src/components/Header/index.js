import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./index.css";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__inner">
      <h1 className="header__title">
        <Link
          to="/"
          className="header__logo"
        >
          MW
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
