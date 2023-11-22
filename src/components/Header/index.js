import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {RiShoppingBagFill} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      className="logo"
      alt="website logo"
    />
    <div className="buttons-container">
      <AiFillHome className="icon" />
      <RiShoppingBagFill className="icon" />
      <FiLogOut className="icon" />
    </div>

    <ul className="buttons-container-window">
      <li className="links">Home</li>
      <li className="links">Jobs</li>
    </ul>
    <button type="button" className="button">
      Logout
    </button>
  </div>
)

export default Header
