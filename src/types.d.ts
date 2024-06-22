interface AccordionItemType {
  id: number,
  label: string,
  slug: string
}

interface AccordionPropType {
  title: string
  items: AccordionItemType[]
}

interface Character {
  id: number
  name: string
  status: string
  image: string
}
interface Characters {
  results: Character[]
}