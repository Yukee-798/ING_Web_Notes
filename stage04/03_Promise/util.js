/* 封装 fs 模块 */
export function readFile(path) {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

/* 封装 AJAX */
export function get(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.apiopen.top/getJoke');
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.response);
                }
            }
        }
    });
}