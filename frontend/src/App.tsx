import React from 'react';
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import {ApolloProvider} from "@apollo/client";
import {client} from "./utils/utils";
import Clients from "./components/Clients";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingleProject from "./components/SingleProject";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Container>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route element={<Clients/>} path={"/"}/>
                            <Route element={<SingleProject/>} path={"/project/:id"}/>
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </Container>
            </ApolloProvider>
        </>
    );
}

export default App;
