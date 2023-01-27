import PropTypes from 'prop-types'
import {FaPlus} from 'react-icons/fa'

const Button = ({color, text, onAdd}) =>{
   
  return (
    <button onClick= {onAdd} style={{backgroundColor: color}} 
    className="btn"><FaPlus /></button>
  )
}
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onAdd: PropTypes.func,
}

export default Button
