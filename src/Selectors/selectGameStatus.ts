import { GameStatus } from "../Store/Game/types"
import { AppState } from "../Store";

export default function (state: AppState): GameStatus {
    return state.game.gameStatus;
}
