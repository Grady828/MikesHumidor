import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export function NewCigar() {
  const [newCigar, setNewCigar] = useState({
    name: '',
    size: '',
    price: '',
    inStock: '',
    // dateBought: '',
    strength: '',
    notes: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedCigar = { ...newCigar, [fieldName]: value }

    setNewCigar(updatedCigar)
  }
  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={newCigar.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="notes">Cigar Notes</label>
          <textarea
            name="notes"
            value={newCigar.notes}
            onChange={handleStringFieldChange}
          ></textarea>
          <span className="note"></span>
        </p>
        <p className="form-input">
          <label htmlFor="size">Size</label>
          <textarea
            name="size"
            value={newCigar.size}
            onChange={handleIntFieldChange}
          ></textarea>
        </p>
        <p className="form-input">
          <label htmlFor="price">Price</label>
          <textarea
            name="price"
            value={newCigar.price}
            onChange={handleIntFieldChange}
          ></textarea>
        </p>
        <p className="form-input">
          <label htmlFor="inStock">InStock</label>
          <textarea
            name="inStock"
            value={newCigar.inStock}
            onChange={handleIntFieldChange}
          ></textarea>
        </p>
        {/* <p className="form-input">
          <label htmlFor="dateBought">Date Cigar Was Bought</label>
          <textarea
            name="dateBought"
            value={newCigar.dateBought}
            onChange={handleStringFieldChange}
          ></textarea>
        </p> */}
        <p className="form-input">
          <label htmlFor="strength">Strength</label>
          <textarea
            name="strength"
            value={newCigar.strength}
            onChange={handleStringFieldChange}
          ></textarea>
        </p>
        <p>
          <div>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </p>
      </form>
    </>
  )
}
