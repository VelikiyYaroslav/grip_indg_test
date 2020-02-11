import { AppState } from "../Store";
import { CurrentUser } from "../Store/Game/types";

export default function (state: AppState): CurrentUser {
    return state.game.currentUser;
}
