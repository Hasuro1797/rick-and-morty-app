import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Episodes from '../components/Episodes'

export default function EpisodesPage() {
  const [searchParams] = useSearchParams()
  const episode = searchParams.get('episode') ?? '1'
  return (
    <React.Fragment>
        <Episodes
          episode={episode}
        />
    </React.Fragment>
  )
}
