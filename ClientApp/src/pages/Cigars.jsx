import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export function Cigars() {
  const [cigars, setCigars] = useState([])
  // const [newCigar, setNewCigar] = useState()
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

  // async function handleNewCigar(event) {
  //   event.preventDefault()
  //   const response = await axios.post('/api/Cigars', {
  //     name: newCigar,
  //   })

  //   const responseWhenReplacingCigar = await axios.get('/api/Cigars')
  //   setCigars(responseWhenReplacingCigar.data)

  //   setNewCigar('')
  // }

  return (
    <>
      <h3>Inventory</h3>
      <input
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
                Name:{cigarDetails.name} Qty:{cigarDetails.inStock} Brand:
                {/* {cigarDetails.brands.map((brand) => {
                  return <>{brand.brandName}</>
                })} */}
                {cigarDetails.brand.brandName}
              </Link>
              <hr />
            </li>
          )
        })}
      </ul>
      <section>
        {/* <div>
          Humidity: <i className="fas fa-plus"></i>71%
          <i className="fas fa-minus"></i>
        </div>
        <div>
          Temp: <i className="fas fa-plus"></i>68&deg;
          <i className="fas fa-minus"></i>
        </div> */}
      </section>
    </>
  )
}
