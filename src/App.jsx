import { useState } from 'react'
import './App.css'
import HomeSection from './HomeSection'
import PlaceList from './PlaceList'

function App() {
  const [count, setCount] = useState(0)

  const places = [
    {
      id: 1,
      name: 'Place 1',
      description: 'This is a description of place 1.',
      imageUrl: 'https://via.placeholder.com/150',
      location: 'Location 1', // Optional fallback location
      rating: 4.5,
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
    {
      id: 2,
      name: 'Place 2',
      description: 'This is a description of place 2.',
      imageUrl: 'https://via.placeholder.com/150',
      location: 'Location 2', // Optional fallback location
      rating: 4.0,
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
    {
      id: 3,
      name: 'Place 3',
      description: 'This is a description of place 3.',
      imageUrl: 'https://via.placeholder.com/150',
      location: 'Location 3', // Optional fallback location
      rating: 3.8,
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
    {
      id: 4,
      name: 'Place 4',
      description: 'This is a description of place 4.',
      imageUrl: 'https://via.placeholder.com/150',
      location: 'Location 4', // Optional fallback location
      rating: 4.2,
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
    {
      id: 5,
      name: 'Place 5',
      description: 'This is a description of place 5.',
      imageUrl: 'https://via.placeholder.com/150',
      location: 'Location 5', // Optional fallback location
      rating: 4.7,
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
    {
      id: 6,
      name: 'Place 6',
      description: 'This is a description of place 6.',
      imageUrl: 'https://via.placeholder.com/150',
      location: 'Location 6', // Optional fallback location
      rating: 3.9,
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
  ];

  return (
    <>
      <div className="App">
        <HomeSection />
        <PlaceList places={places} />
      </div>
    </>
  )
}

export default App
