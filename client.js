const http = require('http');

function tenRequest(){ //async requests by default
    for(let i=0; i<10 ; i++){
        http.get('http://localhost:8001', resp => {
        let data = '';

        resp.on('data', (chunk) =>{
            data += chuck;
        });

        resp.on('end', () => {
            console.log(`Response completed: ${i}  ${data}`);
        });

        });
    }
}

module.exports.tenRequest = tenRequest;