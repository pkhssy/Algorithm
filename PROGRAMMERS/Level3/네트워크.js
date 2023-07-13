/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미
 * 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 * 컴퓨터 A, B, C는 모두 같은 네트워크 상
 * 컴퓨터의 개수 1<=n<=200, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수
 * 네트워크의 개수를 return
 * 각 컴퓨터는 0부터 n-1인 정수로 표현
 * i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현
 * computer[i][i]는 항상 1
 * solution(3, [[1,1,0], [1,1,0], [0,0,1]]) => 2
 * solution(3, [[1,1,0], [1,1,1], [0,1,1]]) => 1
 */

solution = (n, computers) => {
    let answer = 0; // 네트워크 개수
    let visited = Array(n).fill(false); // 방문 여부

    const dfs = (node) => {
        visited[node] = true; // 방문 처리
        computers[node].forEach((connected, i) => {
            if (connected === 1 && !visited[i]) {
                dfs(i);
            }
        })
    };

    computers.forEach((_, i) => {
        if (!visited[i]) {
            dfs(i);
            answer++; // 네트워크 개수 증가
        }
    });

    return answer;
};
