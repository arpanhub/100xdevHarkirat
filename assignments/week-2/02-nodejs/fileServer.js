/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();
    

    app.get('/', function (req, res) {
      res.send(`
          <html>
          <head>
              <title>File Server</title>
              <style>
                  body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                  button { padding: 10px 20px; font-size: 16px; }
                  #fileList { margin-top: 20px; }
              </style>
          </head>
          <body>
              <button onclick="getFiles()">Click to Get Files List</button>
              <div id="fileList"></div>
              <script>
                  function getFiles() {
                      fetch('/files')
                          .then(response => response.json())
                          .then(data => {
                              const fileListDiv = document.getElementById('fileList');
                              fileListDiv.innerHTML = '<ul>' + data.map(file => '<li>' + file + '</li>').join('') + '</ul>';
                          })
                          .catch(error => {
                              console.error('Error fetching files:', error);
                          });
                  }
              </script>
          </body>
          </ht
          ml>
      `);
  });
  
    app.get('/files', function (req, res) {
        fs.readdir(path.join(__dirname, './files/'), (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
        res.json(files);
        });
    });
    
    app.get('/file/:filename', function (req, res) {
      const filepath = path.join(__dirname, './files/', req.params.filename);    
        fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send(data);
        });
    });
    
    app.all('*', (req, res) => {
        res.status(404).send('Route not found');
    });
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
  });
  