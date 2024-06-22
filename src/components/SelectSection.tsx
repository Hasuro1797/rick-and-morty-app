import { Select, SelectItem } from '@nextui-org/react'
import { useSearchParams } from 'react-router-dom'

export default function SelectSection({items, paramsName}: { items: number[], paramsName: string}) {
  const [ searchParams, setSearchParams] = useSearchParams()
  const handleSelectedChange = (episode: string) => {
    searchParams.set(paramsName, episode.toString())
    setSearchParams(searchParams)
    }
  return (
    <section>
      <Select 
        label={`Select an ${paramsName}`}
        className="max-w-xs"
        defaultSelectedKeys={[`${searchParams.get(paramsName) || '1'}`]}
        onChange={e => handleSelectedChange(e.target.value)}
      >
        {items.map((element) => (
          <SelectItem key={element + 1} >
            {`${paramsName} - ${element + 1}`}
          </SelectItem>
        ))}
      </Select>
    </section>
  )
}
