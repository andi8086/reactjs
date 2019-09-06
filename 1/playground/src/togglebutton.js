import React from 'react';
import './togglebutton.css';

function ToggleButton({active, onToggle}) {

    return <div className={active ? "toggle on": "toggle off"} onClick={() => {
        if (onToggle) return onToggle(active);
    }}>{active ? "true": "false"}</div>
}


export default ToggleButton;