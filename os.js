const os = require('os');

// Freier Arbeitsspeicher
console.log(os.freemem());

// Total RAM
console.log(os.totalmem());

// Hauptverzeichnis
console.log(os.homedir());

// Network
// console.log(os.networkInterfaces());

// Welches Betriebsystem
console.log(os.platform());

// CPU Infos
console.log(os.cpus());

// Zeit seit der der Computer läuft in sec
console.log(os.uptime());