/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/49189
 * n: 노드의 개수 (2 <= n <= 20,000)
 * vertex: 간선에 대한 정보가 담긴 2차원 배열 (1 <= vertex.length <= 50,000)
 * vertex[i]: [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미
 * 1번 노드에서 가장 멀리 떨어진 노드가 몇 개인지 반환
 * solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]) => 3
 */

solution = (n, edge) => {
    const answer = []; // 각 노드까지의 거리를 담을 배열
    const graph = new Map(); // 그래프
    const visited = new Array(n + 1).fill(false);  // 방문 여부
    const queue = []; // BFS를 위한 큐

    // 그래프 생성
    for (const [a, b] of edge) {
        graph.set(a, (graph.get(a) ?? []).concat(b));
        graph.set(b, (graph.get(b) ?? []).concat(a));
    }

    // 1번 노드부터 시작
    visited[1] = true; // 1번 노드 방문 처리
    queue.push(1); // 1번 노드 큐에 삽입

    while (queue.length) { // BFS
        const size = queue.length; // 현재 큐의 크기
        answer.push(size); // 현재 큐의 크기를 answer에 삽입
        for (let i = 0; i < size; i++) { // 현재 큐의 크기만큼 반복
            const node = queue.shift(); // 큐에서 노드를 꺼냄
            graph.get(node).forEach((next) => { // 꺼낸 노드와 연결된 노드들을 순회
                if (!visited[next]) { // 방문하지 않은 노드라면
                    visited[next] = true; // 방문 처리
                    queue.push(next); // 큐에 삽입
                }
            });
        }
    }

    return answer.pop(); // answer의 마지막 요소 반환
}