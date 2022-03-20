import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({dataset}) => {
    return (
        <div>
            {dataset.map((data, index) => <Tile key={index} data={data}/>)}
        </div>
    );
};
