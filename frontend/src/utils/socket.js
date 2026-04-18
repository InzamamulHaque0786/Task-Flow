
import { io } from "socket.io-client";

let socket;

export const initiateSocket = (userId) => {
  if (!socket) {
    socket = io("https://task-flow-ll0a.onrender.com", {
      query: { userId }, 
      withCredentials: true,
      transports: ["websocket", "polling"],
    });
    console.log("Socket initiated:", socket.id);
  }
  return socket;
};

export const getSocket = () => socket;