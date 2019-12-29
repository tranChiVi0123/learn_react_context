/*
 * Created by @tranphuquy19 on 10/12/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {useContext} from 'react';
import {PlayerContext} from "../contexts/playerContext";

const ComponentG = () => {
    const {audio, state, controls, ref} = useContext(PlayerContext);

    return (
        <div>
            {audio}
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={controls.pause}>Pause</button>
            <button onClick={controls.play}>Play</button>
            <br/>
            <button onClick={controls.mute}>Mute</button>
            <button onClick={controls.unmute}>Un-mute</button>
            <br/>
            <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
            <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
            <button onClick={() => controls.volume(1)}>Volume: 100%</button>
            <br/>
            <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
            <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
        </div>
    );
};

export default ComponentG;
