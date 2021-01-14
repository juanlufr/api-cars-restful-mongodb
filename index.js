const http = require('http');

const app = require('./src');
const config = require('./src/config');
const database = require('./src/database');

// Connect to database
database.connect(config.database, {});

const { port } = config.server;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
