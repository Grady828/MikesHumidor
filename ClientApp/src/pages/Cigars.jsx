import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export function Cigars() {
  const [cigars, setCigars] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    async function fetchCigars() {
      const response = await axios.get('/api/Cigars')
      setCigars(response.data)
    }
    fetchCigars()
  }, [])

  useEffect(() => {
    async function fetchCigars() {
      const url =
        filterText.length === 0
          ? '/api/Cigars'
          : `/api/Cigars?filter=${filterText}`
      const response = await fetch(url)
      const json = await response.json()
      setCigars(json)
    }
    fetchCigars()
  }, [filterText])

  return (
    <main className="cigars-page">
      <h2>Inventory</h2>
      <input
        className="search-cigars"
        type="text"
        placeholder="Search Cigars"
        value={filterText}
        onChange={function (event) {
          setFilterText(event.target.value)
        }}
      />
      <ul>
        {cigars.map((cigarDetails) => {
          return (
            <li key={cigarDetails.id}>
              <Link to={`/Cigars/${cigarDetails.id}`}>
                Name:{cigarDetails.name} Brand:
                {cigarDetails.brand.brandName} Qty:{cigarDetails.inStock}
              </Link>
              <hr />
            </li>
          )
        })}
      </ul>
    </main>
  )
}
