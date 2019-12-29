/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {useState} from 'react';
import useNumber from "../hooks/useNumber";

const ComponentF = () => {
    let {num, sendNum} = useNumber();

    let send = (number) => {
        let value = num + number;
        sendNum(value);
    }

    return (
        <div>
            <p>{num}</p>
            <button onClick={() => send(1)}>Tăng</button>
            <button onClick={() => send(-1)}>Giảm</button>
        </div>
    );
};

export default ComponentF;

