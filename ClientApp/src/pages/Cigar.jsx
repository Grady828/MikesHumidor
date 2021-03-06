import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

export function Cigar() {
  const [initialInStock, setInitialInStock] = useState(0)
  const [cigarInfo, setCigarInfo] = useState({
    name: '',
    length: 0,
    gauge: 0,
    wrapper: '',
    binder: '',
    filler: '',
    price: 0,
    inStock: 0,
    dateBought: '',
    strength: '',
    notes: '',
    brands: [],
  })

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    async function fetchCigar() {
      const response = await axios.get(`/api/Cigars/${id}`)

      setCigarInfo(response.data)
      setInitialInStock(response.data.inStock)
    }
    fetchCigar()
  }, [id])

  async function deleteCigar() {
    await axios.delete(`/api/Cigars/${id}`)

    history.push('/')
  }

  async function updateInStock() {
    await axios({
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
    await axios({
      url: `/api/Cigars/${id}`,
      method: 'PUT',
      data: removedOneCigar,
    })
    history.push('/')
  }

  return (
    <main className="cigar-info-page">
      <div>
        <h2>{cigarInfo.name}</h2>
        <p>Length:{cigarInfo.length}"</p>
        <p>Gauge:{cigarInfo.gauge}</p>
        <p>Wrapper:{cigarInfo.wrapper}</p>
        <p>Binder:{cigarInfo.binder}</p>
        <p>Filler:{cigarInfo.filler}</p>
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

        <button className="cigarButton" onClick={deleteCigar}>
          {' '}
          Delete{' '}
        </button>
        <button className="cigarButton" onClick={updateInStock}>
          {' '}
          Update Quantity
        </button>
        <button className="cigarButton" onClick={updateRemoveOne}>
          {' '}
          Remove One
        </button>
      </div>
    </main>
  )
}
