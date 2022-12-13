const { MongoClient } = require("mongodb");
const url = process.env.MONGO_DB;

const client = new MongoClient(url);
const dbName = "travelBlog";

async function findAllData() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("travel_blog_data");

  const findResult = await collection.find({}).toArray();

  return findResult;
}

module.exports = {
  findAllData,
};
