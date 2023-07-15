import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MapComponent from './map.comp'

export default function MapApp(): JSX.Element {

    const mapCss = {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        overflow: "hidden",
      }

  return (
    <div className="App">
      <div className='Top'>
        <img style={{width: 20, height: 20}} src="https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg" alt="Img" />
        <h1>React Google Maps</h1>
      </div>
      <MapComponent />
    </div>
  )
}