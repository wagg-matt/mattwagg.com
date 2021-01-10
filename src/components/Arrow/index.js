import React from "react"
import PropTypes from "prop-types"

import "./index.css"

const Arrow = ({ colour = "#1b2a2f" }) => (
  <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="arrow">
    <path d="M0 0 L50 100 L100 0 Z" fill={colour} stroke={colour}></path>
  </svg>
)

Arrow.propTypes = {
  arrow: PropTypes.string,
}

export default Arrow
