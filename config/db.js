const {neon} = require('@neondatabase/serverless');

const client = neon(process.env.Database_URL);

module.exports = client;
