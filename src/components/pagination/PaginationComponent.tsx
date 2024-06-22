import { Pagination } from "@nextui-org/react";
import { useLocation, useSearchParams } from "react-router-dom";

interface PaginationComponentType {
  total: number,
  currentPage?: number
}
export default function PaginationComponent({
  total,
  currentPage
}: PaginationComponentType) {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleChangePagination = (currentPage: number) =>{
    searchParams.set('page', `${currentPage}`);
  
    setSearchParams(searchParams)
  }
  return (
    <Pagination 
      key={location.pathname + currentPage}
      total={total} 
      onChange={handleChangePagination}
      page={currentPage}
    />
  );
}
