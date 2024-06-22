import { Card, CardBody, CardHeader, Chip, Image } from "@nextui-org/react";

export default function CardDetail({
  name, 
  location,
  image,
  status,
  gender,
  origin,
  species
}:Character) {
  return (
    <Card className="py-4 max-w-[324px] mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col gap-4 items-start">
        <div className="flex justify-end w-full">
          <Chip
            color={`${status === 'unknown'?'primary': status === 'Dead' ? 'danger': status === 'Alive' ? 'success': 'secondary' }`} 
            variant="solid"
            radius="sm"
          >
            {status}
          </Chip>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full justify-items-center">
          <article className="flex flex-col items-center max-w-[100px] w-full">
            <p className="text-tiny uppercase font-bold">Gender</p>
            <small className="text-default-500">{gender}</small>
          </article>
          <article className="flex flex-col items-center max-w-[100px] w-full">
            <p className="text-tiny uppercase font-bold">Species</p>
            <small className="text-default-500">{species}</small>
          </article>
          <article className="flex flex-col items-center max-w-[100px] w-full">
            <p className="text-tiny uppercase font-bold">Location</p>
            <small className="text-default-500 text-center text-pretty">{location?.name ?? '-'}</small>
          </article>
          <article className="flex flex-col items-center max-w-[100px] w-full">
            <p className="text-tiny uppercase font-bold">Origin</p>
            <small className="text-default-500 text-center text-pretty">{origin?.name?? '-'}</small>
          </article>
        </div>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-max">
        <Image
          alt={name}
          className="object-cover rounded-xl w-full max-w-[300px]"
          src={image}
        />
      </CardBody>
    </Card>
  );
}
