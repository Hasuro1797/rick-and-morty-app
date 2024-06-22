import React from 'react'
import { GET_LOCATION_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import SelectSection from './SelectSection'
import Cards from './cards/Cards'
import SkeletonTitle from './skeletons/SkeletonTitle'
import SkelentonCards from './skeletons/SkelentonCards'

export default function Locations({location}: {location: string}) {
  const { loading, data } = useQuery(GET_LOCATION_BY_ID,{
    variables:{
      id: +location
    }
  })
  return (
    <main className='pb-10'>
      <section className='py-5'>
        {
          loading ? (
            <SkeletonTitle/>
          ) : (
            <React.Fragment>
              <h2 className='text-[30px] px-8 text-pretty text-center mx-auto font-bold max-w-[700px]'>Location: <span className='text-[#006FED]'>{get(data, 'location.name','')}</span></h2>
              <p className='text-center px-8 text-[18px] leading-[120%]'>Type: {get(data,'location.type','')} </p>
            </React.Fragment>
          )
        }
      </section>
      <section className='px-8 md:px-16 lg:px-20 grid grid-cols-5 gap-5 md:grid-cols-7 lg:grid-cols-12'>
        <div className='col-span-5 md:col-span-7 lg:col-span-3'>
          <SelectSection
            items={[...Array(126).keys()]}
            paramsName="location"
          />
        </div>
        <div className='col-span-5 md:col-span-7 lg:col-span-9'>
          {
            loading ? (
              <SkelentonCards/>
            ): get(data,'location.residents',[]).length === 0 ?
            (
              <p className='text-center max-w-[400px] text-[18px] pt-5 font-semibold mx-auto'>No results have been found</p>
            ):(
              <Cards
                results={get(data,'location.residents',[])}
              />
            )
          }
        </div>
      </section>
    </main>
  )
}
