import { Skeleton } from '@nextui-org/react'

export default function SkeletonTitle() {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <Skeleton className='max-w-[400px] w-full rounded-sm h-8'/>
      <Skeleton className='max-w-[300px] w-full rounded-sm h-5' />
    </div>
  )
}
