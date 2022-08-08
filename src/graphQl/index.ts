import { BASE_URL } from '../utils'
import { client } from './client'
import { kitchenItems } from './queries'
export function kitchenApi() {
    try {
        return client.query({ query: kitchenItems }).then(response => response.data).catch(error => error)
    } catch (error) {

    }
}