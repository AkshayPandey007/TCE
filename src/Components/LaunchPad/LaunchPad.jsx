import React, { useEffect, useMemo } from 'react'
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { latAndLong } from '../../Redux/Service/Launch.Service';

const LaunchPad = () => {
    const dispatch = useDispatch()
    const latLongData= useSelector((state)=>state.launch)

    const { isLoaded } = useJsApiLoader(
        useMemo(
          () => ({
            id: "AIzaSyBmuoUS87C5koXpfSkBzJdg03KYkD3qWMM",
            googleMapsApiKey: "AIzaSyBmuoUS87C5koXpfSkBzJdg03KYkD3qWMM",
            libraries: ["places"],
          }),
          []
        )
      );

      useEffect(()=>{
       dispatch(latAndLong())
      },[])
    const mapStyles = {
        height: '350px',
        width: '100%',
      };
    
      let center = {
        lat: latLongData?.lat,
        lng:latLongData?.long,
      };

      if (!isLoaded) {
        return <p>...LOADING</p>;
      }
  return (
    <div>
       
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
   
    </div>
  )
}

export default LaunchPad