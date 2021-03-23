import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export function Brands() {
  const [brandsInfo, setBrandsInfo] = useState([])
  const [newBrand, setNewBrand] = useState({
    brandName: '',
    description: '',
    photoURL: '',
  })

  useEffect(() => {
    async function loadBrands() {
      const response = await axios.get(`/api/Brands`)

      setBrandsInfo(response.data)
    }
    loadBrands()
  }, [])
  const [setErrorMessage] = useState('')
  const history = useHistory()

  async function handleNewBrand(event) {
    event.preventDefault()
    await axios.post('/api/Brands', newBrand)
    history.push('/NewCigar')
  }

  function handleStringField(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedBrand = { ...newBrand, [fieldName]: value }

    setNewBrand(updatedBrand)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  async function onDropFile(acceptedFiles) {
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    const formData = new FormData()

    formData.append('file', fileToUpload)

    try {
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      if (response.status === 200) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewBrand({ ...newBrand, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      setErrorMessage('Unable to upload image')
    }
  }

  return (
    <main className="brands-page">
      <h2>Brands</h2>
      <ul>
        {brandsInfo.map((brandDetails) => {
          return (
            <li key={brandDetails.id}>
              Name:
              {brandDetails.brandName}
              <p />
              Description:{brandDetails.description}
              <p />
              {brandDetails.photoURL && (
                <img
                  alt={brandDetails.brandName}
                  width={50}
                  src={brandDetails.photoURL}
                />
              )}
              <hr />
            </li>
          )
        })}
      </ul>
      <h3>Add New Brand</h3>
      <form className="brand-form" onSubmit={handleNewBrand}>
        <p>
          <input
            className="brandInput"
            type="text"
            placeholder="Brand Name"
            name="brandName"
            value={newBrand.brandName}
            onChange={handleStringField}
          />
        </p>
        <p>
          <input
            className="brandInput"
            type="text"
            placeholder="Description"
            name="description"
            value={newBrand.description}
            onChange={handleStringField}
          />
        </p>
        {newBrand.photoURL && (
          <p>
            <img alt="brandPhoto" width={200} src={newBrand.photoURL} />
          </p>
        )}
        <div className="file-drop-zone">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? 'Drop the files here ...' : 'Add Pic Here'}
          </div>
        </div>
        <p>
          <input
            className="submit-button-brands"
            type="submit"
            value="Submit"
          />
        </p>
      </form>
    </main>
  )
}
