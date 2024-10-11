import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_ENDPOINT) // Replace with your Appwrite endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID); // Replace with your Appwrite project ID

const databases = new Databases(client);

export { client, databases };
