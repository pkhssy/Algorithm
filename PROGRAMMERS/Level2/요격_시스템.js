/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/181188
 * 1 ≤ targets의 길이 ≤ 500,000
 * targets의 각 행은 [s,e] 형태.
 * 이는 한 폭격 미사일의 x 좌표 범위를 나타내며, 개구간 (s, e)에서 요격해야 합니다.
 * 0 ≤ s < e ≤ 100,000,000
 * solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]) => 3
 */

solution = (targets) => {
    let answer = 0;
    let shoot = 0;

    targets.sort((a, b) => a[1] - b[1]);

    for (const [start, end] of targets) {
        if (shoot <= start) {
            answer++;
            shoot = end;
        }
    }

    return answer;
}