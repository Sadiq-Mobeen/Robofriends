import React from "react";

const Card = ({name, email, id}) => {
    return(
        <div className="tc bg-light-green shadow-2 br3 dib pa2 ma2 grow">
            <img alt='dp' src={`https://robohash.org/${id}?100*100`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export { Card };