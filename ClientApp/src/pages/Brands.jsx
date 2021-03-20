import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'

export function Brands() {
  const [brandsInfo, setBrandsInfo] = useState([])
  const [newBrand, setNewBrand] = useState({
    brandName: '',
    description: '',
  })

  useEffect(() => {
    async function loadBrands() {
      const response = await axios.get(`/api/Brands`)

      setBrandsInfo(response.data)
    }
    loadBrands()
  }, [])

  const history = useHistory()

  async function handleNewBrand(event) {
    event.preventDefault()
    await axios.post('/api/Brands', newBrand)
    // await axios.post('/api/Brands', selectedBrand)
    history.push('/NewCigar')
  }
  function handleStringField(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedBrand = { ...newBrand, [fieldName]: value }

    setNewBrand(updatedBrand)
  }

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
      <h3>New Brand</h3>
      <form className="brand-form" onSubmit={handleNewBrand}>
        <input
          type="text"
          placeholder="Brand Name"
          name="brandName"
          value={newBrand.brandName}
          onChange={handleStringField}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newBrand.description}
          onChange={handleStringField}
        />
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </>
  )
}
