import React, { useState } from 'react';

function SlideShow() {

    const [imgnum, setimgnum] = useState(10);

    let imgsrc = 'https://picsum.photos/200?image=' + imgnum.toString();

    // use {"<"} or &lt; for <. The first is prefered
    return (<div>
        <img src={imgsrc}></img>
        <div>
            <button onClick={() => {
                if (imgnum > 0) {
                    setimgnum(imgnum - 1)
                }
                }}>
                {"<"}
            </button>
            <button onClick={() => {
                setimgnum(imgnum + 1)
                }}>
                {">"}
            </button>
        </div>

        </div>)


}

export default SlideShow;

