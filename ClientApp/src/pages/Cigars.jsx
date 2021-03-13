import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export function Cigars() {
  const [cigars, setCigars] = useState([])
  const [newCigar, setNewCigar] = useState()

  useEffect(async () => {
    const response = await axios.get('/api/Cigars')
    setCigars(response.data)
  }, [])

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
      <ul>
        {cigars.map((cigarDetails) => {
          return (
            <li key={cigarDetails.id}>
              <Link to={`/Cigars/${cigarDetails.id}`}>
                Name:{cigarDetails.name} Qty:{cigarDetails.inStock}
              </Link>
            </li>
          )
        })}
      </ul>
      {/* <div>
        <button>Add A Cigar</button>
      </div> */}
      <section>
        <div>
          Humidity: <i className="fas fa-plus"></i>71%
          <i className="fas fa-minus"></i>
        </div>
        <div>
          Temp: <i className="fas fa-plus"></i>68&deg;
          <i className="fas fa-minus"></i>
        </div>
      </section>
    </>
  )
}
