import React, { useContext } from 'react';
import './App.css';
import { GET_LOCATIONS, GET_FILMS, GITHUD_GET_SCHEMA, TEST } from './QueryString';
import { useQuery } from '@apollo/client/react';
import { setContext } from '@apollo/client/link/context';

import Router from './Router';
import { Loading } from './Component/Loading';
export default function App() {

  function DisplayLocations() {
    const variables = { id: 15125 };
    const { loading, error, data } = useQuery(TEST, { variables });

    if (loading) return <Loading />;
    // if (error) return <ErrorPage />;
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
    <>
      {/* <DisplayLocations /> */}
      <Router />
    </>

  );
}