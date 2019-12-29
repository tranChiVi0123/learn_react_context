/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(
            "http://localhost:4000"
        );

        socketRef.current.on(
            "newChatMessage",
            ({ message }) => {
                setMessages(messages => [...messages, message]);
            }
        );

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendMessage = ({ message }) => {
        socketRef.current.emit("newChatMessage", { message });
    };

    return { messages, sendMessage };
};

export default useChat;
