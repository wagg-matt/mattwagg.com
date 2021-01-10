import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Container = ({ colour, children }) => (
  <section className={`container${colour ? ` container--${colour}` : ''}`}>
    <div className="container__inner">
      {children}
    </div>
  </section>
)

Container.propTypes = {
  colour: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Container
