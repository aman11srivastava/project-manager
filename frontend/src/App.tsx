import React from 'react';
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import {ApolloProvider} from "@apollo/client";
import {client} from "./utils/utils";
import Clients from "./components/Clients";

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Header/>
                <Container>
                    <Clients/>
                </Container>
            </ApolloProvider>
        </>
    );
}

export default App;
