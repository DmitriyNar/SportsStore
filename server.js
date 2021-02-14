const express = require('express');
const cors = require('cors');
const jsonServer= require('json-server');
const chokidar = require('chokidar');

const port = process.argv[3] || 3500;
const filename = process.argv[2] || './data.js'

let router = undefined;

const createServer = ()=>{
    delete require.cache[require.resolve(filename)];
    setTimeout( ()=> {router = jsonServer.router( 
        filename.endsWith('js') ? require(filename)() : filename
        )}, 100)
}
createServer();

const app = express();
app.use(jsonServer.bodyParser)
app.use(cors())

app.use('/api', (req, res, next)=> router(req, res, next))

chokidar.watch(filename).on('change', ()=>{
    console.log('Data file changed');
    createServer();
    console.log('Server up to date');
});

app.listen(port, ()=>{ console.log(`Server listen on port ${port}`) })
