import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        // converting string to JSON object
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type == "chat") {
            // @ts-ignore
            const currentUser = allSockets.find((x) => x.socket == socket);
            if (!currentUser) {
                console.log("User tried to chat without joining a room.");
                return;
            }
            const currentUserRoom = currentUser.room;
            for (let i = 0; i < allSockets.length; i++) {
                // @ts-ignore
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i]?.socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
    socket.on("disconnect", () => {
        // @ts-ignore
        allSockets = allSockets.filter(x => x != socket);
    });
});
//# sourceMappingURL=index.js.map