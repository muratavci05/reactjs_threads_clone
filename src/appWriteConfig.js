import { Client } from 'appwrite';


const client = new Client();

const VITE_ENDPOINT = import.meta.env.VITE_ENDPOINT
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID

client
    .setEndpoint(VITE_ENDPOINT)
    .setProject(PROJECT_ID);

    export default client