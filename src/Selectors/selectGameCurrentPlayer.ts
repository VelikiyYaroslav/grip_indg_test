import { AppState } from "../Store";

// todo change number to type 
export default function (state: AppState): number {
    return state.game.currentUser;
}
