const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = './download';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const file = fs.createWriteStream(path.join(dir, "文件名"));
const url = "文件的URL";

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  }
};

https.get(url, options, function(response) {
  response.pipe(file);
});
