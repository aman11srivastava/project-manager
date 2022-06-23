import React from "react";
import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";
import {Row, Spinner} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import {ProjectType} from "../utils/utils";

export const Projects = () => {
    const {loading, data, error} = useQuery(loader('../graphql/getProjects.graphql'))

    if (loading) return <Spinner animation={"border"}/>
    if (error) return <h1>Something went wrong!!</h1>

    return (
        <>
            <Row className={"mt-4"}>
                {
                    data.projects && data.projects.length > 0 ? data.projects.map((project: ProjectType) => (
                        <ProjectCard key={project.id} project={project}/>
                    )) : <h1>No Projects found</h1>
                }
            </Row>
        </>
    )
}

export default Projects;
