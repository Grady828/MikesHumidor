import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export function NewCigar() {
  const [newCigar, setNewCigar] = useState({
    name: '',
    length: '',
    gauge: '',
    wrapper: '',
    binder: '',
    filler: '',
    price: '',
    inStock: '',
    strength: '',
    notes: '',
    brandId: '',
  })

  const [brandsInfo, setBrandsInfo] = useState([])
  const [selectedBrand] = useState({
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

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedCigar = { ...newCigar, [fieldName]: value }

    setNewCigar(updatedCigar)
  }

  function handleIntFieldChange(event) {
    const value = Number(event.target.value) || 0
    const fieldName = event.target.name

    const updatedCigar = { ...newCigar, [fieldName]: value }

    setNewCigar(updatedCigar)
  }

  const history = useHistory()

  async function handleFormSubmit(event) {
    event.preventDefault()
    await axios.post('/api/Cigars', newCigar)
    history.push('/')
  }

  return (
    <main className="new-cigar-page">
      <h2>Add A Cigar</h2>
      <form className="new-cigar-form" action="#" onSubmit={handleFormSubmit}>
        <p className="form-input">
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={newCigar.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <input
            placeholder="Cigar Notes"
            name="notes"
            value={newCigar.notes}
            onChange={handleStringFieldChange}
          ></input>
          <span className="note"></span>
        </p>
        <p className="form-input">
          <input
            placeholder="Length"
            name="length"
            value={newCigar.length}
            onChange={handleIntFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <input
            placeholder="Gauge"
            name="gauge"
            value={newCigar.gauge}
            onChange={handleIntFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <input
            placeholder="Wrapper"
            name="wrapper"
            value={newCigar.wrapper}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <input
            placeholder="Binder"
            name="binder"
            value={newCigar.binder}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <input
            placeholder="Filler"
            name="filler"
            value={newCigar.filler}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <input
            placeholder="Price"
            name="price"
            value={newCigar.price}
            onChange={handleIntFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <input
            placeholder="Stock"
            name="inStock"
            value={newCigar.inStock}
            onChange={handleIntFieldChange}
          ></input>
        </p>

        <p className="form-input">
          <input
            placeholder="Strength"
            name="strength"
            value={newCigar.strength}
            onChange={handleStringFieldChange}
          ></input>
        </p>

        <p className="form-input">
          <select
            className="select-option"
            value={selectedBrand}
            name="brandId"
            onChange={handleIntFieldChange}
          >
            <option value="">Brands</option>
            {brandsInfo.map((brandDetails) => {
              return (
                <option key={brandDetails.id} value={brandDetails.id}>
                  {brandDetails.brandName}
                </option>
              )
            })}
          </select>
        </p>
        <p className="form-input">
          <input className="submit-button" type="submit" value="Submit" />
        </p>
      </form>
    </main>
  )
}
