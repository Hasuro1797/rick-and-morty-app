import { useQuery } from '@apollo/client'
import { Skeleton } from '@nextui-org/react'
import { get } from 'lodash'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/cards/CardDetail'
import { GET_CHARACTER_BY_ID } from '../graphql/queries'

export default function CharacterPage() {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_CHARACTER_BY_ID,{
    variables: {
      id: Number(id)
    }
  })
  return (
    <main className='my-16'>
      {
        loading?(
          <Skeleton className='max-w-[324px] w-full rounded-xl h-[500px] py-4 mx-auto'/>
        ):(
          <CardDetail
            id={get(data,'character.id')}
            name={get(data,'character.name')}
            status={get(data,'character.status')}
            image={get(data,'character.image')}
            location={get(data,'character.location')}
            origin={get(data,'character.origin')}
            gender={get(data,'character.gender')}
            species={get(data,'character.species')}
          />
        )
      }
    </main>
  )
} 
