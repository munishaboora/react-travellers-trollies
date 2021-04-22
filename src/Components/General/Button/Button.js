// import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


// 

const Button = ({ type, text, onClicking }) => {
  return (
    <button name={type} onClick={ onClicking }>
      {text}
    </button>
  )
}

// Button.defaultProps = {
//     color: 'steelblue',
//     text: ''
// }

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   onClick: PropTypes.func
// }

export default Button