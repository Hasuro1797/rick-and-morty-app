import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query getCharacters(
    $page: Int!, 
    $name: String,
    $status: String,
    $gender: String,
    $species: String
  ) {
    characters(
      page: $page, 
      filter:{ 
        name: $name, 
        status: $status,
        gender: $gender,
        species: $species
      }
    ){
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
        species
        gender
      }
    }
  }
`

export const GET_EPISODE_BY_ID = gql`
  query getEpisode(
    $id: ID!, 
  ) {
    episode(id: $id){
      id
      name
      air_date
      characters{
        id
        name
        status
        image
      }
    }
  }
`
export const GET_LOCATION_BY_ID = gql`
  query getlocation($id: ID!){
    location(id: $id){
      id
      name
      type
      residents{
        id
        name
        status
        image
      }
    }
  }
`
export const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!){
    character(id: $id){
      id
      name
      status
      species
      image
      gender
      location{
        name
      } 
      origin{
        name
      }
    }
  }
`