import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'

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
    brand: '',
  })

  const [newBrand, setNewBrand] = useState()

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
    const response = await axios.post('/api/Cigars', newCigar)

    history.push('/')
  }

  return (
    <>
      <p>
        <h2>Add A Cigar</h2>
      </p>
      <form className="new-cigar" action="#" onSubmit={handleFormSubmit}>
        <p className="form-input">
          {/* <label htmlFor="name"></label> */}
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={newCigar.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="notes"></label>
          <input
            placeholder="Cigar Notes"
            name="notes"
            value={newCigar.notes}
            onChange={handleStringFieldChange}
          ></input>
          <span className="note"></span>
        </p>
        <p className="form-input">
          <label htmlFor="size"></label>
          <input
            placeholder="Length"
            name="length"
            value={newCigar.length}
            onChange={handleIntFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="gauge"></label>
          <input
            placeholder="Gauge"
            name="gauge"
            value={newCigar.gauge}
            onChange={handleIntFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="wrapper"></label>
          <input
            placeholder="Wrapper"
            name="wrapper"
            value={newCigar.wrapper}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="Binder"></label>
          <input
            placeholder="Binder"
            name="binder"
            value={newCigar.binder}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="Filler"></label>
          <input
            placeholder="Filler"
            name="filler"
            value={newCigar.filler}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="price"></label>
          <input
            placeholder="Price"
            name="price"
            value={newCigar.price}
            onChange={handleIntFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="inStock"></label>
          <input
            placeholder="Stock"
            name="inStock"
            value={newCigar.inStock}
            onChange={handleIntFieldChange}
          ></input>
        </p>

        <p className="form-input">
          <label htmlFor="strength"></label>
          <input
            placeholder="Strength"
            name="strength"
            value={newCigar.strength}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="Brand"></label>
          <input
            placeholder="Brand"
            name="Brand"
            value={newCigar.brand.brandName}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p>
          <input className="submit-button" type="submit" value="Submit" />
        </p>
      </form>
    </>
  )
}
