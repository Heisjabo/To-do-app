import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
     <h1>{title}</h1>
     <Button color={'darkslateblue'} text={showAdd ? 
      'Close' : 'Add'} onAdd={onAdd}/>
    </header>
  )
}
Header.defaultProps = {
    title: 'To-do list',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// const HeaderStyle = {
//     color: "red", 
//     backgroundColor: "black"

// }

export default Header
