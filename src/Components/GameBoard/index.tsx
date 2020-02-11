import React from "react";
import { Board } from "./Board";
import { Status } from "./Status";


export function GameBoard() {
    return (
        <div>
            <Board />
            <Status />
        </div>
    ) 
}
