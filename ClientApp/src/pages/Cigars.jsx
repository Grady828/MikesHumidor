import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function Cigars() {
  const [cigars, setCigars] = useState([])

  useEffect(async () => {
    const response = await axios.get('/api/Cigars')
    setCigars(response.data)
  }, [])

  return (
    <>
      <h3>Inventory:</h3>
      <ul>
        {cigars.map((cigarDetails) => {
          return <li key={cigarDetails.id}> {cigarDetails.name}</li>
        })}
        {/* <li>Arturo Fuente - 5</li>

        <li>Nub - 4</li>

        <li>Montecristo - 3</li>

        <li>Tirador Ramos - 2</li> */}
      </ul>
      <section>
        <div>
          Current Humidity: <i className="fas fa-plus"></i>71%
          <i className="fas fa-minus"></i>
        </div>
        <div>
          Current Temp: <i className="fas fa-plus"></i>68&deg;
          <i className="fas fa-minus"></i>
        </div>
      </section>
    </>
  )
}
