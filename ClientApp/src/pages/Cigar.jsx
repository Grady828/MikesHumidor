import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

export function Cigar() {
  const [initialInStock, setInitialInStock] = useState(0)
  const [cigarInfo, setCigarInfo] = useState({
    name: '',
    size: 0,
    price: 0,
    inStock: 0,
    dateBought: '',
    strength: '',
    notes: '',
  })

  const history = useHistory()
  const { id } = useParams()

  useEffect(async function () {
    const response = await axios.get(`/api/Cigars/${id}`)

    setCigarInfo(response.data)
    setInitialInStock(response.data.inStock)
  }, [])

  async function deleteCigar() {
    const response = await axios.delete(`/api/Cigars/${id}`)

    history.push('/')
  }

  async function updateInStock() {
    const response = await axios({
      url: `/api/Cigars/${id}`,
      method: 'PUT',
      data: cigarInfo,
    })
    history.push('/')
  }
  function handleStockChange(event) {
    setCigarInfo({ ...cigarInfo, inStock: Number(event.target.value) })
  }

  async function updateRemoveOne() {
    const removedOneCigar = { ...cigarInfo, inStock: initialInStock - 1 }
    const response = await axios({
      url: `/api/Cigars/${id}`,
      method: 'PUT',
      data: removedOneCigar,
    })
    history.push('/')
  }

  return (
    <>
      <div className="cigar-info">
        <p>Name: {cigarInfo.name}</p>
        <p>Size:{cigarInfo.size}"</p>
        <p>Price:${cigarInfo.price}</p>
        <p>
          QTY:
          <input
            type="text"
            value={cigarInfo.inStock}
            onChange={handleStockChange}
          />
        </p>
        <p>Strength:{cigarInfo.strength}</p>
        <p>Purchased:{moment(cigarInfo.dateBought).format('MMM Do YYYY')}</p>
        <p>Notes:{cigarInfo.notes}</p>
      </div>
      <button onClick={deleteCigar}> Delete </button>
      <button onClick={updateInStock}> Update Quantity</button>
      <button onClick={updateRemoveOne}> Remove One</button>
    </>
  )
}
