import React from "react";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";
import {Card, Spinner} from "react-bootstrap";

export const SingleProject = () => {
    const {id} = useParams();
    const {data, loading, error} = useQuery(loader('../graphql/getProjectById.graphql'), {
        variables: {
            id
        }
    })
    if (loading) return <Spinner animation={"border"}/>
    if (error) return <h1>Something went wrong!!</h1>

    return (
        <>
            <Card className={"mx-auto w-75 p-5"}>
                <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                    Back
                </Link>
                <h1>{data.project.name}</h1>
                <p>{data.project.description}</p>

                <h5 className='mt-3'>Project Status</h5>
                <p className='lead'>{data.project.status}</p>
            </Card>
        </>
    )
}

export default SingleProject;
