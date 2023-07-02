import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './header.css'

const Header = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const navigateHome = () => {
    history.replace('/')
  }

  return (
    <div className="header-container">
      <div className="web-logo-container">
        <button type="button" className="home" onClick={navigateHome}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </button>
      </div>
      <div className="links-container">
        <Link to="/">
          <p className="nav-link">Home</p>
        </Link>
        <Link to="/jobs">
          <p className="nav-link">Jobs</p>
        </Link>
      </div>
      <div className="logout-container">
        <button type="button" className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
