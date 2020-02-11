import { GameScore } from "./CalculateGameScore";
import { getUserPointsFromGameScore } from "./GetUserPointsFromGameScore";

export const DRAW_BY_POINTS = "DRAW";
export type WinnerType = number | typeof DRAW_BY_POINTS;

type TupleUserNumberAndUserPoints = {
    userNumber: number,
    points: number,
}

export function findWinner(score: GameScore): WinnerType {
    const usersPoints = score.users.map((_, userNumber) => getUserPointsFromGameScore(score, userNumber));
    const usersPointsForSort = usersPoints.reduce((reducer: TupleUserNumberAndUserPoints[], points, userNumber) => {
        return [...reducer, { points, userNumber }]
    }, []);

    // descending sort
    const sortedUsersPoints = usersPointsForSort.sort((a, b) => b.points - a.points);

    if (sortedUsersPoints.length === 0) {
        return DRAW_BY_POINTS;
    }
    if (sortedUsersPoints.length === 1) {
        return 0;
    }

    if (sortedUsersPoints[0].points === sortedUsersPoints[1].points) {
        return DRAW_BY_POINTS;
    }

    return sortedUsersPoints[0].userNumber;
}
