import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";
import { matchMaker } from "colyseus"
// import socialRoutes from "@colyseus/social/express"

import { GameRoom } from "./game/GameRoom";

const port = Number(process.env.PORT || 2567);
const app = express()

app.use(cors({
  origin: ['localhost:4200', 'https://tursoft.github.io']
}));

// app.use(express.static('views'))

// app.use('/static', express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res){
//   res.sendfile('index.html', { root: __dirname + "/views/index.html" } );
// });

app.use('/', express.static(__dirname + 'views', { index: "index.html" }));

app.use(express.json())

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

// register your room handlers
gameServer.define('gameRoom', GameRoom);
// matchMaker.createRoom("gameRoom", { /* options */ });


/**
 * Register @colyseus/social routes
 *
 * - uncomment if you want to use default authentication (https://docs.colyseus.io/authentication/)
 * - also uncomment the import statement
 */
// app.use("/", socialRoutes);

// register colyseus monitor AFTER registering your room handlers
app.use("/stats", monitor());

gameServer.listen(port);
console.log(`Listening Snake OnlineMulti Game Server on ws://localhost:${ port }`)
