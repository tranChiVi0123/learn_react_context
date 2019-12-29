/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {useContext} from 'react';
import {StringContext} from "../contexts/stringContext";

const ComponentC = () => {
    const [str, setStr] = useContext(StringContext);
    return (
        <div>
            <input onChange={(e)=> setStr(e.target.value)}/>
        </div>
    );
};

export default ComponentC;

