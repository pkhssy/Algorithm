/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/169198
 * 3 ≤ m, n ≤ 1,000
 * 0 < startX < m, 0 < startY < n
 * 2 ≤ balls의 길이 ≤ 1,000
 * balls의 원소는 [a, b] 형태, a, b는 머쓱이가 맞춰야 할 공이 놓인 좌표
 * 0 < a < m, 0 < b < n
 * (a, b) = ( startX, startY )인 입력은 들어오지 않습니다.
 * solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]) => [52, 37, 116]
 */

const solution = (m, n, startX, startY, balls) => {
    const calculateCushion = (targetX, targetY) => ({
        left: (targetX + startX) ** 2 + Math.abs(targetY - startY) ** 2,
        right: (m + m - targetX - startX) ** 2 + Math.abs(targetY - startY) ** 2,
        top: Math.abs(targetX - startX) ** 2 + (n + n - targetY - startY) ** 2,
        bottom: Math.abs(targetX - startX) ** 2 + (targetY + startY) ** 2,
    });

    return balls.map(([targetX, targetY]) => {
        const {left, right, top, bottom} = calculateCushion(targetX, targetY);

        if (targetX === startX) {
            return Math.min(left, right, startY > targetY ? top : bottom);
        } else if (targetY === startY) {
            return Math.min(top, bottom, startX > targetX ? right : left);
        } else {
            return Math.min(left, right, top, bottom);
        }
    });
};