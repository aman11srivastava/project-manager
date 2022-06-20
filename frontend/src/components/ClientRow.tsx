import React from "react";
import {ClientType} from "../utils/utils";
import {Button} from "react-bootstrap";
import {FaTrash} from "react-icons/fa";

interface ClientRowProps {
    client: ClientType
}

export const ClientRow = (props: ClientRowProps) => {
    const { name, phone, email} = props.client;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <Button className={"btn-danger btn-sm"}>
                    <FaTrash/>
                </Button>
            </td>
        </tr>
    )
}

export default ClientRow;
