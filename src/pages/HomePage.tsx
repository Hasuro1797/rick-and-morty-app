import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import HomeCardlist from "../components/Characters";
import SearchComponent from "../components/search/SearchComponent";
import FilterSection from "../components/filter/FilterSection";
import SkelentonCards from "../components/skeletons/SkelentonCards";

export default function HomePage() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const search = searchParams.get('search') ?? ''
  const status = searchParams.get('status') ?? ''
  const gender = searchParams.get('gender') ?? ''
  const specie = searchParams.get('specie') ?? ''
  return (
    <main className="flex flex-col gap-6 md:gap-8 lg:gap-10">
      <section className="px-8">
        <SearchComponent/>
      </section>
      <section className='px-8 md:px-16 lg:px-20 grid grid-cols-5 gap-5 md:grid-cols-7 lg:grid-cols-12'>
        <div className='col-span-5 md:col-span-7 lg:col-span-3'>
          <FilterSection/>
        </div>
        <div className='col-span-5 md:col-span-7 lg:col-span-9'>
          <Suspense fallback={<SkelentonCards hasPagination/>}>
            <HomeCardlist 
              currentPage={+page} 
              search={search} 
              status={status}
              gender={gender}
              specie={specie}
            />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
