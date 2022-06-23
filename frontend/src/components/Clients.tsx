import React from "react";
import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";
import {Spinner, Table} from "react-bootstrap";
import {ClientType} from "../utils/utils";
import ClientRow from "./ClientRow";
import AddClientModal from "./AddClientModal";
import Projects from "./Projects";

export const Clients = () => {
    const {data, loading, error} = useQuery(loader('../graphql/getClients.graphql'))

    if (loading) return <Spinner animation={"border"}/>;
    if (error) return <h3>Something went wrong!!</h3>;

    return (
        <>
            <AddClientModal/>
            <Projects/>
            <Table className={"table-hover mt-3"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {data && data.clients.map((client: ClientType) => (
                    <ClientRow key={client.id} client={client}/>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export default Clients;
