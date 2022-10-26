import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../../QueryString";
import Home from "../../Component/Home";
import { Loading } from "../../Component/Loading";
export const HomeContainer = () =>{
    const { loading, error, data } = useQuery(GET_FILMS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)
    return(
    <>
    <Loading/>
    </>
    );
}