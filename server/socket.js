const socket = io => {
  io.on("connection", function(socket) {
    console.log("User connected");
    socket.on("chatmessage", (msg) => {
      socket.broadcast.emit("chatmessage", msg);
      
    });
  });
};

module.exports = socket;