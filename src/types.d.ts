interface AccordionItemType {
  id: number,
  label: string,
  slug: string
}

interface AccordionPropType {
  title: string
  items: AccordionItemType[]
}

interface LocationType {
  name: string
}

interface OriginType {
  name: string
}
interface Character {
  id: number
  name: string
  status: string
  image: string
  species?: string
  gender?:string
  location?: LocationType
  origin?: OriginType
}
interface Characters {
  results: Character[]
}