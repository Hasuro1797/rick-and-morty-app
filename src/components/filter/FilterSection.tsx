import { MouseEventHandler } from 'react'
import { useSearchParams } from 'react-router-dom'
import { genderList, speciesList, statusList } from '../../utils/filters'
import AccordionComponent from './AccordionComponent'

export default function FilterSection() {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const clearFilters: MouseEventHandler<HTMLSpanElement> = () => {
      searchParams.delete("gender");
      searchParams.delete("specie");
      searchParams.delete("status");
      setSearchParams(searchParams)
    }
  
  return (
    <section className=''>
      <div className='flex flex-col gap-3'>
        <h2 className='text-[24px] leading-[120%] text-center font-bold'>Filters</h2>
        <span 
          onClick={clearFilters}
          className='text-center underline text-[18px] cursor-pointer hover:text-[#006FED]'>
            clear filters
        </span>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <AccordionComponent
          title='Status'
          items={statusList}
        />
        <AccordionComponent
          title='Gender'
          items={genderList}
        />
        <AccordionComponent
          title='Specie'
          items={speciesList}
        />
      </div>
    </section>
  )
}
