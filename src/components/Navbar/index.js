import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header/index'
import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="nav-bar">
      <img
        src="https://res.cloudinary.com/defacaof3/image/upload/v1706171013/download-removebg-preview_avhbei.png"
        className="logo"
        alt="logo"
      />
      <div>
        <Header />
      </div>
      <button type="button" className="more-container" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Navbar)
