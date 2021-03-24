import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

export function Brand() {
  const [brandInfo, setBrandInfo] = useState({
    brandName: '',
    description: '',
    photoURL: '',
  })

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    async function fetchBrand() {
      const response = await axios.get(`/api/Brands/${id}`)

      setBrandInfo(response.data)
    }
    fetchBrand()
  }, [id])

  async function deleteBrand() {
    await axios.delete(`/api/Brands/${id}`)

    history.push('/brands')
  }

  return (
    <main className="brand-info-page">
      <div>
        <h2>{brandInfo.brandName}</h2>
        <p>{brandInfo.description}</p>
        <p>
          {brandInfo.photoURL && (
            <img
              alt={brandInfo.brandName}
              width={200}
              src={brandInfo.photoURL}
            />
          )}
        </p>
        <button className="delete-brand" onClick={deleteBrand}>
          Delete
        </button>
      </div>
    </main>
  )
}
