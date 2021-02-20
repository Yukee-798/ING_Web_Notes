

export function readFile(path, ) {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}






