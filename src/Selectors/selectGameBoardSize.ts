import { AppState } from "../Store";

export default function (state: AppState): number {
    return state.game.boardState.length;
}