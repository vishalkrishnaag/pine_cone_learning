import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
    apiKey: '9fa8b483-dbd7-4da1-ac8b-d0251bc16ef7' 
});


// Creates an index using the API key stored in the client 'pinecone'.
await pc.createIndex({
    name: 'auth-guide',
    dimension: 8,
    metric: 'euclidean',
    spec: { 
        serverless: { 
            cloud: 'aws', 
            region: 'us-west-2' 
        }
    } 
}) 
