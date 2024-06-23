import { Skeleton } from '@nextui-org/react'

export default function SkelentonCards({hasPagination = false}: {hasPagination?: boolean}) {
  return (
    <section>
      <ul className='grid grid-cols-1 justify-items-center bg-red-100 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          [...Array(20).keys()].map(element => (
            <Skeleton key={element} className='aspect-square rounded-2xl w-full max-w-[300px]'/>
          ))
        }
      </ul>
      {hasPagination && (<div className='flex justify-center py-10'>
        <Skeleton className='max-w-[276px] w-full h-9'/>
      </div>)}
    </section>
  )
}
