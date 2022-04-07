

const chat=document.getElementById("chat")
const message=document.getElementById("message")
const send=document.getElementById("send")
const room=document.getElementById("room")
const join=document.getElementById("join")

const socket=io("http://localhost:3238")
socket.on("hello from server",()=>{
    console.log(socket.id)  
    
   
    
})
socket.on("ping!",(message)=>{
    const text=document.createTextNode(message)
  
    chat.appendChild(text)
    chat.appendChild(document.createElement("br"))
    
})
send.addEventListener("click",(event)=>{
    const text=document.createTextNode(message.value.toString())
    chat.appendChild(text)
    chat.appendChild(document.createElement("br"))
    socket.emit("message",message.value.toString())
})
join.addEventListener("click",(event)=>{
   socket.emit("join this room",room.value.toString())
    
})