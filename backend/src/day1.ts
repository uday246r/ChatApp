import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket)=>{
    allSockets.push(socket);

    // userCount = userCount + 1;
    // console.log("user connnected #" + userCount);

    socket.on("message",(event)=>{
        // console.log("message received " + event.toString());

        allSockets.forEach(s=>{
            s.send(event.toString() + ": sent from the server");
        })
        // for(let i=0;i<allSockets.length;i++){
        //     const s = allSockets[i];
        //     s?.send(event.toString() + ": sent from the server");
        // }
        // setTimeout(()=>{
        //     socket.send(event.toString() + " from server");
        // }, 1000);
    })
    socket.on("disconnect",()=>{
        allSockets = allSockets.filter(x =>x!=socket);
    })
})   


