// Write your code here

import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="container">
    <nav className="nav-bar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon-size" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="m-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="icon-size" />
            </button>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome />
                  <p className="content">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill />
                  <p className="content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
  </div>
)

export default withRouter(Header)
