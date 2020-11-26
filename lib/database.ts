import { Db, MongoClient } from 'mongodb';

interface ConnectType {
  db: Db;
  client: MongoClient;
}

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect(): Promise<ConnectType> {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db('online-classes');
  return { db, client };
}

export default connect;