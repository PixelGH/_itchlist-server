const http = require('http');
const fs = require('fs');

const server = http.createServer();

const lists;
fs.readFile("lists/index.json", res => {
    lists = JSON.parse(res);
});

server.on('request', (request, response) => {

});

function getList() {
    let count = lists.count;
    return lists.lists[Math.random() * count];
}