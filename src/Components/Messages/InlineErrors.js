import React from 'react';
// import './Maincourse.css'
// import './NavBar.js'
//import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const InlineErrors = ({text}) =>

      <span style = {{color:"#ad000b"}}>{text}</span>;

InlineErrors.ProtoTypes ={
  text: PropTypes.string.isRequired
};
export default InlineErrors;
