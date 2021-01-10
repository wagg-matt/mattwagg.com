import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const TextInput = ({ id }) => (
  <input className="textinput" id={id} name={id} type="text"></input>
)

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
}

export default TextInput
