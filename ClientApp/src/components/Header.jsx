import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [openSesame, setOpenSesame] = useState(false)
  // const [filterText, setFilterText] = useState('')

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
            onChange={() => setOpenSesame(!openSesame)}
          />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to="/newCigar" onClick={() => setOpenSesame(false)}>
              <li> Add A Cigar</li>
            </Link>
            <Link to="/Brands" onClick={() => setOpenSesame(false)}>
              <li>Brands</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="header-links">
            <Link to="/newCigar" onClick={() => setOpenSesame(false)}>
              <li> Add A Cigar</li>
            </Link>
            <Link to="/Brands" onClick={() => setOpenSesame(false)}>
              <li>Brands</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}
