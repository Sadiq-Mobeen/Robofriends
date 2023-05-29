import React from "react";
import './Search.css'

const SearchComponent = ({search}) => {
    return(
        <div className="mb3">
            <input type="text" placeholder="Search" className="pa2" onChange={search} />
        </div>
    )
}

export default SearchComponent