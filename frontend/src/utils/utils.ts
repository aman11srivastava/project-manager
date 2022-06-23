import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

export interface clientStructure {
    name: string
    phone: string
    email: string
}

export interface ClientType extends clientStructure {
    id: string
}
