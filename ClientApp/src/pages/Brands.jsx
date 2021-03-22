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
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.status === 200) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewBrand({ ...newBrand, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      // Catch any network errors and show the user we could not process their upload

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
      <h3>New Brand</h3>
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
            {isDragActive ? 'Drop the files here ...' : 'Drag a picture here!'}
          </div>
        </div>
      </form>
      <input className="submit-button-brands" type="submit" value="Submit" />
    </main>
  )
}
