import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/db/schema'
// import * as customer from '@/db/customer-schema'

const postgresql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: postgresql, schema: { ...schema } });

export default db;