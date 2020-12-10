const fs = require('fs')

// Ordner erstellen
fs.mkdir('./test/2/a', { recursive: true }, (err) => {
    if (err) throw err;
    // console.log("Test Ordner erstellt!");
});

// Datei erstellen und befüllen
// fs.writeFile('blog1.txt', "Hallo ihr alle!", err => {
//     if (err) throw err
//     console.log("Blog1 erstellt");
//     fs.appendFile('blog1.txt', " Ist Node.js nicht toll?!", err => {
//         if (err) throw err
//         console.log("Blog1 ergänzt");
//         fs.readFile('./blog1.txt', 'utf8', (err, data) => {
//             if (err) throw err
//             console.log(data);
//         })
//     })
// })

const data = require('./data')

fs.writeFile('lorem.txt', data, err => {
    if (err) throw err
    // console.log("Lorem done");
})

if (fs.existsSync('./os.js')) {
    console.log('The path exists.');
} else {
    console.log("Not here yet");
}

