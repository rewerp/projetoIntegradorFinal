import postgres from 'postgres';

const dbAccess = {
  PGHOST: 'ep-orange-waterfall-19870285.us-east-2.aws.neon.tech',
  PGDATABASE: 'neondb',
  PGUSER: 'rewerp',
  PGPASSWORD: 'tXih5Y6fsjVE',
  ENDPOINT_ID: 'ep-orange-waterfall-19870285'
};

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = dbAccess; //process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

export const sql = postgres(URL, { ssl: 'require' });