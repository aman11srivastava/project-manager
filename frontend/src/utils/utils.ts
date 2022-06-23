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

export enum ProjectStatus {
    new = "Not Started",
    progress = "In Progress",
    completed = "Completed"
}

export interface ProjectStructure {
    name: string
    status: ProjectStatus
    description: string
    client: ClientType
}

export interface ProjectType extends ProjectStructure {
    id: string
}
