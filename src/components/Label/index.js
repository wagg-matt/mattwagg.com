import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Label = ({ label, name }) => (
  <label className="label" htmlFor={name}>{label}</label>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Label
