import React from 'react'
import search from '../images/search.png'
import avatar from '../images/user.png'

export function Cigars() {
  return (
    <header>
      <span className="Menu">Menu</span>
      <h2 className="header-name">Humidor</h2>
      <span className="Search">
        <img src={search} alt={search} height="30" width="30" />
      </span>
      <span className="Login">
        <img src={avatar} alt={avatar} height="30" width="30" />
      </span>
    </header>
  )
}
