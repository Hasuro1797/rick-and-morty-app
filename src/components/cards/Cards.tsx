import { get } from 'lodash'
import CardComponent from './CardComponent'

export default function Cards({results}: Characters) {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        results.map(element =>
          (
            <CardComponent
              key={get(element,"id","")}
              name={get(element,"name","")}
              status={get(element,"status","")}
              image={get(element,"image","")}
            />
          )
        )
      }
    </div>
  )
}
