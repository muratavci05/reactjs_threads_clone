import { Client, Databases } from "appwrite";

const client = new Client();

const VITE_ENDPOINT = import.meta.env.VITE_PROJECT_ID
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const DEVELOP_DB_ID = import.meta.env.VITE_DB_ID
const COLLECTION_ID_THREADS = import.meta.env.VITE_COLLECTION_ID_THREADS



client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64be2a885944c8cfd915");


export const databases= new Databases (client)
export default client;
