/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */

import React, {useContext} from 'react';
import {NumberContext} from "../contexts/numberContext";

const ComponentB = () => {
    const [number, setNumber] = useContext(NumberContext);
    let edit = (v) => {
        setNumber(number + v);
    }
    return (
        <div>
            <button onClick={() => edit(1)}>Tang</button>
            <button onClick={() => edit(-1)}>Giam</button>
        </div>
    );
};

export default ComponentB;
