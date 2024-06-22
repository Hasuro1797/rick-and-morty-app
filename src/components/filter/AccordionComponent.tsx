import { Accordion, AccordionItem } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";


export default function AccordionComponent({title, items}: AccordionPropType) {
  const [ searchParams, setSearchParams ] = useSearchParams()

  const handleChangeFilter = (title: string, slug: string) => {
    return (event: React.MouseEvent<HTMLLIElement>) => {
      event.preventDefault();
      searchParams.set(title.toLowerCase(), slug);
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    };
  }
  return (
    <Accordion isCompact className="dark:text-[#ECEDEE]" variant="splitted">
      <AccordionItem key="1" aria-label={title} title={title}>
        <ul className="list-disc flex flex-col gap-2">
          {
            items.map(item => (
              <li 
                className={`${searchParams.get(title.toLowerCase()) === item.slug ? 'text-[#006FED]': ''} pl-4 dark:opacity-60 light:opacity-80 light:hover:text-[#006FED] dark:hover:opacity-80 cursor-pointer`}
                key={item.id}
                onClick={handleChangeFilter(title, item.slug)}
              >
                {item.label}
              </li>
            ))
          }
        </ul>
      </AccordionItem>
    </Accordion>
  )
}
