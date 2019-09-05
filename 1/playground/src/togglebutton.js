import React from 'react';

function ToggleButton({active, onToggle}) {

    let currentStateStyle = active ? "toggle on": "toggle off";

    return <button className={currentStateStyle} onClick={() => {
        if (onToggle) return onToggle(active);
    }}>{active ? "true": "false"}</button>
}


export default ToggleButton;