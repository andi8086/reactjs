import React, { useState } from 'react'
import './stars.css'

// TODO: 
// return Array of spans
// set style with CSS of each span
// Use unicode for the star

const starIDs = [1, 2, 3, 4, 5]

function Rating({stars}) {
    
    function getStar(id)
    {
        let res = id > stars ? "☆" : "★"
        let sstyle = id > stars ? "star off": "star on"
        return <span className={sstyle}>{res}</span>
    }
    
    return <> { starIDs.map(id => getStar(id)) } </>
}

export default Rating;