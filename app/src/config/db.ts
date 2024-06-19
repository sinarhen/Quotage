// import {MongoClient} from "mongodb";

// const getDbConnection = async () => {

//   const url = "mongodb://127.0.0.1:27017/Quotage?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";

//   const client = new MongoClient(url);
//   try {

//     await client.connect();

//     const database = client.db('quotage');
//     const collection = database.collection('quotes');

//     const stringData = "Thought is the grandchild of ignorance.";

//     const result = await collection.insertOne({"quote":stringData});
//     console.log(`String inserted with ID: ${result.insertedId}`);
//     return client;
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await client.close();
//   }
//   return null;
// }

