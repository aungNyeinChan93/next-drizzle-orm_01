import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const postgresql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: postgresql });

export default db;