import { BoardState } from "../Store/Game/types"
import { AppState } from "../Store";

export default function (state: AppState): BoardState {
    return state.game.boardState;
}