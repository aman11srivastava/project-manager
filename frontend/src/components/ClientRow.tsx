import React from "react";
import {ClientType} from "../utils/utils";
import {Button} from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import {useMutation} from "@apollo/client";
import {loader} from "graphql.macro";

interface ClientRowProps {
    client: ClientType
}

export const ClientRow = (props: ClientRowProps) => {
    const { name, phone, email, id} = props.client;
    const [deleteClient] = useMutation(loader('../graphql/deleteClient.graphql'))

    function deleteClientHandler() {
        deleteClient({
            variables: {
                id
            },
            refetchQueries: [{query: loader('../graphql/getClients.graphql')}]
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <Button onClick={deleteClientHandler} className={"btn-danger btn-sm"}>
                    <FaTrash/>
                </Button>
            </td>
        </tr>
    )
}

export default ClientRow;
