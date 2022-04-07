const io=require("socket.io")(3238,{cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"]
  }})

io.on("connection",(socket)=>{
   console.log(socket.id)
   socket.emit("hello from server")
   
  socket.on("join this room",(room)=>{
      socket.join(room)
      console.log("joined!")

      socket.on("message",(message)=>{
          socket.to(room).emit("ping!",message)
      })
  });

   
})

