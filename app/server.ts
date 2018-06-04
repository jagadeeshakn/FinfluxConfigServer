
import {LoginController} from './controllers'
import {IndexController} from './controllers'
import express = require("express");
import path = require("path")

const app: express.Application = express();

const port: any = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const server_ip_address: string = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

//Static file rendering
app.use(express.static(path.join(__dirname, 'public')));

//Routing
// app.use("/", IndexController);
// app.use('/login', LoginController);

app.listen(port, server_ip_address, () => {
    console.log("app is listening on " + server_ip_address 
                + "port : " + port);
}); 