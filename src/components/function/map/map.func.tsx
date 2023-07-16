import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '650px'
};

const center = {
  lat: 37.5649867,
  lng: 126.985575
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
}

export default function MapFunc(): JSX.Element {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCTFoF1rJNAPV0yZWh7TSMcaRQiIBdPr1o',
  })
  
  const [map, setMap] = React.useState(null)
  
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  
    setMap(map)
  }, [])
  
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])
   
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : <></>
}

