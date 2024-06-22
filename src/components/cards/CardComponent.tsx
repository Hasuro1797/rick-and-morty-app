import { Card, CardFooter, Image } from "@nextui-org/react";
import {Chip} from "@nextui-org/react";

interface CardComponentType {
  name:string,
  status: string
  image: string
}
export default function CardComponent({
  name,
  status,
  image,
}:CardComponentType) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-[300px]"
    >
      <Image
        alt={name}
        className="md:object-cover"
        src={image}
      />
      <CardFooter className="justify-between before:bg-black/50 border-black/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Chip 
          color={`${status === 'unknown'?'primary': status === 'Dead' ? 'danger': status === 'Alive' ? 'success': 'secondary' }`} 
          variant="solid"
          radius="sm"
        >
            {status}
        </Chip>
      </CardFooter>
    </Card>
  );
}
