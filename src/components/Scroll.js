import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '73.5vh', padding: '10px 40px', width: '100vw', margin: 'auto'}}>
            { props.children }
        </div>
    )
}

export default Scroll;