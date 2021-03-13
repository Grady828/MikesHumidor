import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

export function Cigar() {
  const [cigarInfo, setCigarInfo] = useState({
    Name: '',
    Size: 0,
    Price: 7,
    InStock: 11,
    DateBought: '',
    Strength: '',
    Notes: '',
  })
  // const [cigarInfo, setCigarInfo] = useState({})

  // const history = useHistory()
  const { id } = useParams()

  useEffect(async function () {
    const response = await axios.get(`/api/Cigars/${id}`)

    setCigarInfo(response.data)
  }, [])

  return (
    <>
      <header>
        {/* <h1 className="header-name">Humidor</h1> */}
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Cigar Stock</li>
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
      <div className="cigar-info">
        <p>Name: {cigarInfo.name}</p>
        <p>Size:{cigarInfo.size}"</p>
        <p>Price:${cigarInfo.price}</p>
        <p>QTY:{cigarInfo.inStock}</p>
        <p>Strength:{cigarInfo.strength}</p>
        <p>Purchased:{moment(cigarInfo.dateBought).format('MMM Do YYYY')}</p>
        <p>Notes:{cigarInfo.notes}</p>
      </div>
    </>
  )
}
