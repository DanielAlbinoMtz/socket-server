import Server from "./class/server";
import router from "./router/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyParser.urlencoded({extended: true})
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());
//CORS
server.app.use(cors({origin: true, credentials: true}));

server.app.use('/', router)

server.start(() => {
    console.log(`Server running on port ${server.port}`);
});