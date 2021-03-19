import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function Brands() {
  const [brandsInfo, setBrandsInfo] = useState([])
  const [newBrand, setNewBrand] = useState({
    brandName: '',
    description: '',
  })

  useEffect(async function () {
    const response = await axios.get(`/api/Brands`)

    setBrandsInfo(response.data)
  }, [])

  return (
    <>
      <h2>Brands</h2>
      <ul>
        {brandsInfo.map((brandDetails) => {
          return (
            <li key={brandDetails.id}>
              Name:{brandDetails.brandName}
              <p />
              Description:{brandDetails.description}
              <hr />
            </li>
          )
        })}
      </ul>
    </>
  )
}
