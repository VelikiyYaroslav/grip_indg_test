import { AppState } from "../Store";
import { MAX_USERS } from "../Store/Game/types"

export default function (state: AppState): number {
    return MAX_USERS;
}
