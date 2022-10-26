import React, { useContext } from 'react';
import './App.css';
import { GET_LOCATIONS, GET_FILMS } from './QueryString';
import { useQuery } from '@apollo/client/react';
import Router from './Router';
export default function App() {



  function DisplayLocations() {
    const variables = { id: 15125 };
    const { loading, error, data } = useQuery(GET_FILMS, { variables });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)
    // return data.locations.map((el: { id: React.Key | null | undefined; photo: any; name: any; description: any; }) => (
    //   <div key={el.id}>
    //     <h3>{el.name}</h3>
    //     <img width="400" height="250" alt="location-reference" src={`${el.photo}`} />
    //     <br />
    //     <b>About this location:</b>
    //     <p>{el.description}</p>
    //     <br />
    //   </div>
    //));
    return <></>

  }
  return (
    //<DisplayLocations />
    <Router />
  );
}