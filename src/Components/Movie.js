import React from "react";

const Movie = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Get Movies</button>
        </div>
    );
}

export default Movie;