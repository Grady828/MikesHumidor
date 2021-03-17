import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [openSesame, setOpenSesame] = useState(false)
  const [filterText, setFilterText] = useState('')

  return (
    <header>
      <Link to="/">
        <h1 className="header-name">Humidor</h1>
      </Link>
      <nav role="navigation">
        <div id="menuToggle">
          <input
            type="checkbox"
            checked={openSesame}
            onClick={() => setOpenSesame(!openSesame)}
          />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to="/newCigar" onClick={() => setOpenSesame(false)}>
              <li> Add A Cigar</li>
            </Link>
            <a href="#">
              <li>Brands</li>
            </a>
            <a href="#">
              <li>Search</li>
            </a>
            <a href="#">
              <li>Sign In</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  )
}
