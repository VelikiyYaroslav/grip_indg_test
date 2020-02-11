import { AppState } from "../Store";
import { GameScore, calculateGameScore } from "../Helpers/CalculateGameScore";

export default function (state: AppState): GameScore {
    return calculateGameScore(state.game.boardState);
}