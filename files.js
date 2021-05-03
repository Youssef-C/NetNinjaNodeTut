 const fs = require('fs');
/*// reading files
fs.readFile('./Docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log("last line"); */
// writing files
fs.writeFile('./Docs/blog1.txt', "awww chukcs", () => {
    console.log("File was rewritten");
});


// directories

// deleting files