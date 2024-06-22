import React from 'react'
import Locations from '../components/Locations'
import { useSearchParams } from 'react-router-dom'

export default function LocationPage() {
  const [searchParams] = useSearchParams()
  const location = searchParams.get('location') ?? '1'
  return (
    <React.Fragment>
        <Locations
          location={location}
        />
    </React.Fragment>
  )
}
