import React, { useState } from 'react';

function SlideShow() {

    const [imgnum, setimgnum] = useState(10);

    let imgsrc = 'https://picsum.photos/200?image=' + imgnum.toString();

    return (<div>
        <img src={imgsrc}></img>
        <div>
            <button onClick={() => {
                setimgnum(imgnum + 1)
                }}>
                next
            </button>
            <button onClick={() => {
                if (imgnum > 0) {
                    setimgnum(imgnum - 1)
                }
                }}>
                prev
            </button>
        </div>
        
        </div>)


}

export default SlideShow;

