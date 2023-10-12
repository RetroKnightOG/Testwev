import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text button">{props.text}</span>
      <Link to="/s/game" className="navigation-links-navlink button">
        {props.text1}
      </Link>
      <span className="navigation-links-text1 button">{props.text2}</span>
      <span className="navigation-links-text2 button">{props.text3}</span>
      <span className="navigation-links-text3 button">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Conntact',
  text: 'Events',
  text3: 'Reserve',
  rootClassName: '',
  text1: 'Games',
  text2: 'Membership',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
