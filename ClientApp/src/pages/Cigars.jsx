import React from 'react'
import logo from '../images/logo.png'
import avatar from '../images/user.png'

export function Cigars() {
  return (
    <header>
      <ul>
        <li>
          <img src={logo} alt={logo} height="40" width="60" />
          <nav>
            <h2>Your Humidor</h2>
          </nav>
          <div>
            <img src={avatar} alt={avatar} height="30" width="20" />
          </div>
        </li>
      </ul>
    </header>
  )
}
