import { gql } from '@apollo/client/core';

export const GET_LOCATIONS = gql`
query GetLocations {
  locations {
    id
    name
    description
    photo
  }
}`;

// export const GET_ANIME = gql
// `query ($id: Int) {(id)
//   Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
//     id
//     title {
//       romaji
//       english
//       native
//     }
//   }
// }`;

export const GET_FILMS = gql`query Query {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
    }
  }
}
`