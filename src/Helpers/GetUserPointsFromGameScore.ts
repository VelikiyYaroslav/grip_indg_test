import { GameScore } from "./CalculateGameScore";

export function getUserPointsFromGameScore(gameScore: GameScore, userNumber: number): number {
    const userPointsList = gameScore.users[userNumber];
    return userPointsList.sort()[userPointsList.length - 1];
}
