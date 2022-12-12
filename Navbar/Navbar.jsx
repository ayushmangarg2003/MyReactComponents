import React , {Component} from 'react';
import './Navbar.css';
import { MenuItems } from '../MenuItems/MenuItems';

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked : !this.state.clicked})
  }
  render() {
    return (
    <nav className="NavbarItems">
      <h1 className="NavbarLogo">TRAVEL<span className='red'>arc.</span></h1>
      <div className="MenuIcons" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
      </div>
 
      <ul className={this.state.clicked ? "NavMenu active" :"NavMenu"}>
        {MenuItems.map((item , index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          )
        })}
        <button>Sign up</button>
      </ul>
    </nav>
  )
  }
}

export default Navbar
