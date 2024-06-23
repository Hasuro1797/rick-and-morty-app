import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_EPISODE_BY_ID } from '../graphql/queries'
import { get } from 'lodash'
import Cards from './cards/Cards'
import SelectSection from './SelectSection'
import SkeletonTitle from './skeletons/SkeletonTitle'
import SkelentonCards from './skeletons/SkelentonCards'

export default function Episodes({episode}:{episode: string}) {
  const { loading, data } = useQuery(GET_EPISODE_BY_ID,{
    variables:{
      id: +episode
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
              <h2 className='text-[30px] text-pretty px-8 text-center mx-auto font-bold max-w-[700px]'>Episode: <span className='text-[#006FED]'>{get(data, 'episode.name','')}</span></h2>
              <p className='text-center px-8 text-[18px] leading-[120%]'>Air Date: {get(data,'episode.air_date','')} </p>
            </React.Fragment>
          )
        }
      </section>
      <section className='px-8 md:px-16 lg:px-20 grid grid-cols-5 gap-5 md:grid-cols-7 lg:grid-cols-12'>
        <div className='col-span-5 md:col-span-7 lg:col-span-3 bg-red-200'>
          <SelectSection
            items={[...Array(51).keys()]}
            paramsName='episode'
          />
        </div>
        <div className='col-span-5 md:col-span-7 lg:col-span-9'>
          {
            loading ? (
              <SkelentonCards/>
            ): get(data,'episode.characters',[]).length === 0 ? 
            (
              <p className='text-center max-w-[400px] text-[18px] pt-5 font-semibold mx-auto'>No results have been found</p>
            ):(
              <Cards
                results={get(data,'episode.characters',[])}
              />
            )
          }
        </div>
      </section>
    </main>
  )
}
