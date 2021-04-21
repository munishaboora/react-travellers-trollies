import PropTypes from 'prop-types'

// { color, text, onClick }

const Button = () => {
  return (
    <button>
    Hello world
          {/* onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    
      <p> {text} </p>
      <img src={icon} disabled={icon ? false : true}> </img> only display a button icon if given  */}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: ''
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button