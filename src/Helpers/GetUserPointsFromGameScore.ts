import { GameScore } from "./CalculateGameScore";

export function getUserPointsFromGameScore(gameScore: GameScore, userNumber: number): number {
    const userPointsList = gameScore.users[userNumber];
    if (!userPointsList) {
        return 0;
    }
    return userPointsList.sort()[userPointsList.length - 1];
}
