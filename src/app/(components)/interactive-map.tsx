'use client'
// src/components/InteractiveMap.tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the structure of a marker (latitude, longitude, and title)
interface MarkerData {
  lat: number;
  lng: number;
  title: string;
}

// Define the container style for the map
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Define the center of the map (New York City in this case)
const center = {
  lat: 40.7128,
  lng: -74.006, // Example: New York City
};

const InteractiveMap = () => {
  // Initialize the state with an empty array of type MarkerData[]
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    // Fetch property locations from your API
    axios
      .get<{ latitude: number; longitude: number; title: string }[]>('/api/listings') // Specify the response type
      .then((response) =>
        setMarkers(
          response.data.map((listing) => ({
            lat: listing.latitude,
            lng: listing.longitude,
            title: listing.title,
          }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Property Locations</h2>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                title={marker.title}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default InteractiveMap;
