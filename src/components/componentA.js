/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */

import React, {useContext} from 'react';

import {NumberContext} from "../contexts/numberContext";
import {StringContext} from "../contexts/stringContext";

const ComponentA = () => {
    const [number] = useContext(NumberContext);
    const [str] = useContext(StringContext);
    return (
        <div>
            {number} | {str}
        </div>
    );
};

export default ComponentA;
