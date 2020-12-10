const path = require('path');


console.log(__filename);

// Basename: Zeigt nur den Dateinamen
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// Zeigt das Verzeich
console.log(path.dirname(__filename));

// Zeigt die Dateiendung
console.log(path.extname(__filename));
console.log(path.extname("index.html"));

// Man bekommt ein Objekt mit allen Information über den Pfad
console.log(path.parse(__filename));

// Manchmal kann es zu Problemen mit Windows / Mac / Linux kommen, was Pfade angeht wegen / \ 
// dafür gibt es join
console.log(path.join(__dirname, '/', 'home', 'index.html'));