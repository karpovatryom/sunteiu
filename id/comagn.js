   const fs = require('fs');

   // Asynchronous read file example
   fs.readFile('file.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });

   // Synchronous read file example (not recommended for large files)
   try {
       const data = fs.readFileSync('file.txt', 'utf8');
       console.log(data);
   } catch (err) {
       console.error(err);
   }
   