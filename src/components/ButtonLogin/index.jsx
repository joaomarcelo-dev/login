import './style.scss';
import { Link } from 'react-router-dom'

export default function ButtonLogin(props) {
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  }
  
  return (
    <>
      <div className='content-button-login' style={styles}>
        {props.icon}
        <h2>{props.text}</h2>
      </div>
    </>
  )
}