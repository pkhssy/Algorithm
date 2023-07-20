/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/42628
 * 명령어   수신 탑(높이)
 * I 숫자  큐에 주어진 숫자를 삽입합니다.
 * D 1    큐에서 최댓값을 삭제합니다.
 * D -1   큐에서 최솟값을 삭제합니다.
 * 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현
 * solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]) => [0,0]
 * solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]) => [333, -45]
 */

const solution = (operations) => {
    const queue = [];

    const executeOperation = (command, num) => {
        if (command === "I") {
            queue.push(num);
        } else if (command === "D") {
            if (num === 1) {
                const maxIndex = queue.indexOf(Math.max(...queue));
                queue.splice(maxIndex, 1);
            } else if (num === -1) {
                const minIndex = queue.indexOf(Math.min(...queue));
                queue.splice(minIndex, 1);
            }
        }
    };

    operations.forEach((operation) => {
        const [command, num] = operation.split(" ");
        const parsedNum = Number(num);
        executeOperation(command, parsedNum);
    });

    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
};
