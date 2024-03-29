import React, { useState } from 'react'
import './stars.css'
import PropTypes from 'prop-types';

// TODO: 
// return Array of spans
// set style with CSS of each span
// Use unicode for the star


function Rating({stars, onChange = null}) {
    
    const starIDs = [1, 2, 3, 4, 5]

    function getStar(id)
    {
        let inactive = id > stars;
        let res = inactive ? "☆" : "★"
        let sstyle = inactive ? "star off": "star on"
        
        return <span key={id} onClick={() => {
            if (onChange) return onChange(id);
        }} className={sstyle}>{res}</span>
    }
 
    return <div>{ starIDs.map(id => getStar(id)) }</div>
}

Rating.propTypes = {
    stars: PropTypes.number.isRequired,
    onChange: PropTypes.func
}

export default Rating;