import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const TextArea = ({ id }) => (
  <textarea className="textarea" id={id} name={id} rows="4" cols="48"></textarea>
)

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
}

export default TextArea
