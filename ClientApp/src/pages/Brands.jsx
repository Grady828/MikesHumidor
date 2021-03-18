import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function Brands() {
  const [brandsInfo, setBrandsInfo] = useState([])
  const [newBrand, setNewBrand] = useState({
    name: '',
    description: '',
  })

  useEffect(async function () {
    const response = await axios.get(`/api/Brands`)

    setBrandsInfo(response.data)
  }, [])

  return (
    <>
      <div className="brands-info">
        <p>Brand Name: {brandsInfo.name}</p>
        <p>Description: {brandsInfo.description}</p>
      </div>
    </>
  )
}
