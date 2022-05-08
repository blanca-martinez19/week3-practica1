//Usando objeto de express
const express = require('express');

//App de express
const app = express();

//Puerto en que vamos a ver nuestra app : localhost:3000
const port = 3000;

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) =>{
    res.send('Hello world!');
});

//Respondiendo texto
//localhost:3000/launchX
app.get('/launchx', (req,res) =>{
    res.send('Bienvenidos a launchx')
});

//Query params: Recibir parametros por la url
//localhost:3000/explorers/carlo
//req.params ={"explorerName":"carlo"}
app.get('/explorers/:explorerName', (req,res) =>{
    const explorer = {name:"Explorer", msg:"Hello"}
    res.send(req.params)
});

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res) =>{
    const explorer = {name:"Explorer", msg:"Hello"}
    res.send(explorer)
});

//Con esto inicializamos esta app
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})