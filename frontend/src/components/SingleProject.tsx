import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";
import {Spinner} from "react-bootstrap";

export const SingleProject = () => {
    const {id} = useParams();
    const {data, loading, error} = useQuery(loader('../graphql/getProjectById.graphql'), {
        variables: {
            id
        }
    })
    if (loading) return <Spinner animation={"border"}/>
    if (error) return <h1>Something went wrong!!</h1>

    console.log(data)

    return (
        <>
        </>
    )
}

export default SingleProject;
