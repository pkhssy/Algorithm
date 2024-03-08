/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199
 * 말의 움직임은 상, 하, 좌, 우 4방향 중 하나를 선택해서 게임판 위의 장애물이나 맨 끝에 부딪힐 때까지 미끄러져 이동하는 것을 한 번의 이동으로 칩니다.
 * "."은 빈 공간을, "R"은 로봇의 처음 위치를, "D"는 장애물의 위치를, "G"는 목표지점
 * board: 게임판의 상태를 나타내는 문자열 배열
 * 말이 목표위치에 도달하는데 최소 몇 번 이동해야 하는지 return 하는 solution 함수를 완성
 * 만약 목표위치에 도달할 수 없다면 -1을 return
 * solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]) => 7
 * solution([".D.R", "....", ".G..", "...D"]) => -1
 */

const solution = (board) => {
    const findCharPosition = (char) => {
        const x = board.findIndex(row => row.includes(char));
        const y = board[x].indexOf(char);
        return [x, y];
    };

    const isValidMove = (nextX, nextY) => {
        const cellValue = board?.[nextX]?.[nextY];
        return cellValue === "." || cellValue === "R" || cellValue === "G";
    };

    const [startX, startY] = findCharPosition("R");
    const [goalX, goalY] = findCharPosition("G");

    const markedCells = Array.from({length: board.length}, () => Array(board[0].length).fill(0));
    const directions = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    let queue = [[startX, startY]];

    while (queue.length > 0) {
        const [currentX, currentY] = queue.shift();

        if (markedCells[goalX][goalY]) {
            return markedCells[goalX][goalY];
        }

        for (const [dx, dy] of directions) {
            let [nextX, nextY] = [currentX, currentY];

            while (isValidMove(nextX + dx, nextY + dy)) {
                nextX += dx;
                nextY += dy;
            }

            if (nextX === currentX && nextY === currentY) continue;
            if (markedCells[nextX][nextY] > 0) continue;

            markedCells[nextX][nextY] = markedCells[currentX][currentY] + 1;
            queue.push([nextX, nextY]);
        }
    }

    return -1;
};