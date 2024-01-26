import {Link} from 'react-router-dom'
import {GoHome, GoSearch} from 'react-icons/go'
import {IoCompassOutline} from 'react-icons/io5'
import {FiSend, FiPlusSquare} from 'react-icons/fi'
import {FaRegHeart} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const Header = () => (
  <>
    <Link to="/" className="logo-container">
      <GoHome className="icon" />
      <p className="logo-para">Home</p>
    </Link>
    <div className="logo-container">
      <GoSearch className="icon" />
      <p className="logo-para">Search</p>
    </div>
    <div className="logo-container">
      <IoCompassOutline className="icon" />
      <p className="logo-para">Explore</p>
    </div>
    <div className="logo-container">
      <FiSend className="icon" />
      <p className="logo-para">Messages</p>
    </div>
    <div className="logo-container">
      <FaRegHeart className="icon" />
      <p className="logo-para">Notifications</p>
    </div>
    <div className="logo-container">
      <FiPlusSquare className="icon" />
      <p className="logo-para">Create</p>
    </div>
    <Link to="/profile/rahulAttuluri" className="logo-container">
      <CgProfile className="icon" />
      <p className="logo-para">Profile</p>
    </Link>
  </>
)

export default Header
