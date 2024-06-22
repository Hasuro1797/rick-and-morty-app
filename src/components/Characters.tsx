import { useSuspenseQuery } from '@apollo/client'
import { get } from 'lodash'
import { GET_CHARACTERS } from '../graphql/queries'
import Cards from './cards/Cards'
import PaginationComponent from './pagination/PaginationComponent'

interface CarlistType {
  currentPage: number
  search: string
  status: string
  gender: string
  specie: string
}
const Characters = ({currentPage, search, status, gender, specie }: CarlistType) => {
  const { data }= useSuspenseQuery(GET_CHARACTERS,{
    variables:{
      page: +currentPage,
      name: search,
      status,
      gender: gender,
      species: specie
    }
  })
  if(get(data,'characters.results',[]).length === 0){
    return(
      <p className='text-center max-w-[400px] text-[18px] pt-5 font-semibold mx-auto'>No results have been found</p>
    )
  }
  return (
    <section>
      <Cards
      results={get(data,'characters.results',[])}
      />
      <div className='flex justify-center py-6 md:py-10'>
        <PaginationComponent
          key={search + currentPage}
          total={get(data,"characters.info.pages",1)}
          currentPage={currentPage}
        />
      </div>
    </section>
  )
}

export default Characters
