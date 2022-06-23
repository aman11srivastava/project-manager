import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {Button, FormControl, Modal} from "react-bootstrap";
import {FaUser} from "react-icons/fa";
import {clientStructure} from "../utils/utils";
import {useMutation} from "@apollo/client";
import {loader} from "graphql.macro";

export const AddClientModal = () => {
    const initialState: clientStructure = {
        name: '',
        phone: '',
        email: ''
    }
    const [show, setShow] = useState<boolean>(false);
    const [user, setUser] = useState<clientStructure>(initialState)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [createClient] = useMutation(loader('../graphql/addClient.graphql'))

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUser({...user, [e.target.name]: e.target.value});
    }

    function addClientHandler(e: SyntheticEvent) {
        e.preventDefault();
        createClient({
            variables: {
                name: user.name,
                email: user.email,
                phone: user.phone
            },
            refetchQueries: [{query: loader('../graphql/getClients.graphql')}]
        })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <FaUser className={"icon"}/>
                    <div>Add a new Client</div>
                </div>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addClientHandler}>
                        <FormControl className={"mb-4"} type={"text"} placeholder={"Name"} required={true}
                                     value={user.name} name={"name"} onChange={handleChange}/>
                        <FormControl className={"mb-4"} type={"email"} placeholder={"Email"} required={true}
                                     value={user.email} name={"email"} onChange={handleChange}/>
                        <FormControl className={"mb-4"} type={"text"} placeholder={"Contact"} required={true}
                                     value={user.phone} name={"phone"} onChange={handleChange}/>
                        <Button className={"btn-lg w-100"} type={"submit"} variant="primary" onClick={handleClose}>
                            Add
                        </Button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default AddClientModal;
