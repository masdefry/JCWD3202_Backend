import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs'; // FileSystem: Read File

const PORT = 5000;

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/api' && req.method === 'GET') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.write('Hello, this is a Vanilla Node.js API');
    } else if (req.url === '/api/products' && req.method === 'GET') {
      const getData: string = fs.readFileSync('./db.json', 'utf-8');
      const parseGetData = JSON.parse(getData);

      res.writeHead(200, 'Get Products Success', { 'content-type': 'application/json' });
      res.write(JSON.stringify(parseGetData));
      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});



// Buatkan end-point untuk mendapatkan data category product