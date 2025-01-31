const fs = require('fs').promises;
fs.readFile('abhi.txt','utf8')
.then(data=>console.log('File content:',data))
.catch(err=>console.error('Error reading file:',err));
