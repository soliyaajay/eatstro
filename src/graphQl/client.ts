import { ApolloClient, InMemoryCache, } from '@apollo/client'
import { BASE_URL } from '../utils/index'
// Initialize Apollo Client
export const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
});