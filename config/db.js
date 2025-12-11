const {neon} = require('@neondatabase/serverless');

const client = neon(process.env.DB_URL);

module.exports = client;