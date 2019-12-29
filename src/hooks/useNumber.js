/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {useEffect, useRef, useState} from "react";
import socketIOClient from 'socket.io-client';

const endpoint = 'http://localhost:4000/';

const useNumber = () => {
    const [num, setNum] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(endpoint);
        socketRef.current.on('BN9ziWLi4nIzkuRK', (num) => {
            setNum(Number(num));
        });

        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    const sendNum = (num) => {
        setNum(num);
        socketRef.current.emit('BN9ziWLi4nIzkuRK', num);
    }

    return {num, sendNum};
};

export default useNumber;
