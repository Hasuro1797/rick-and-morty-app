import { Input } from '@nextui-org/react'
import { useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import { SearchIcon } from '../icons/SearchIcon'

const WAIT_BETWEEN_CHANGE = 300

export default function SearchComponent() {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      searchParams.set('search', term);
    } else {
      searchParams.delete('search');
    }
    if(searchParams.get("page") !== "1") searchParams.set('page', '1')
    setSearchParams(searchParams)
  },WAIT_BETWEEN_CHANGE)

  return (
    <div className='flex justify-center'>
      <Input
          classNames={{
            base: "max-w-full sm:max-w-[400px] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          onChange={(e) => handleSearch(e.target.value)}
          startContent={<SearchIcon height={18} width={18} />}
          type="search"
          defaultValue={searchParams.get('search') || ''}
        />
    </div>
  )
}
