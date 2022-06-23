import React from "react";
import {ProjectType} from "../utils/utils";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

interface ProjectCardProps {
    project: ProjectType
}

export const ProjectCard = (props: ProjectCardProps) => {
    const {name, id, description, status, client} = props.project;
    const {name: clientName, email, phone, id: clientId} = client;
    return (
        <Col md={6}>
            <Card className={"mb-3"}>
                <Card.Body>
                    <div className={"d-flex justify-content-between align-items-center"}>
                        <Card.Title>{name}</Card.Title>
                        <Link to={`/project/${id}`}>
                            <Button>
                                View
                            </Button>
                        </Link>
                    </div>
                    <p className={"small"}>
                        Status: <strong>{status}</strong>
                    </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard;
