import React from 'react';

import Label from "../Label";
import TextInput from "../TextInput";
import TextArea from "../TextArea";

import './index.css';

const Form = () => (
  <form name="contact" method="POST" data-netlify="true">
    <Label label="First name" name="first-name" />
    <TextInput id="first-name" />
    <Label label="Last name" name="last-name" />
    <TextInput id="last-name" />
    <Label label="Email" name="email" />
    <TextInput id="email" />
    <Label label="Message" name="message" />
    <TextArea id="message" />
    <button className="submit" type="submit">Send</button>
  </form>
)

export default Form
