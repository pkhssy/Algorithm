solution = (n, s, a, b, fares) => {
    const graph = calGraph(n, fares);
    const shortest = shortestDis(n, graph);

    return sharedRide(s, a, b, shortest);
}

calGraph = (n, fares) => {
    // 값을 무조건 크게 만들어서 최솟값 찾기
    const g = Array(n).fill(undefined).map(() => Array(n).fill(Infinity));

    // A -> B 의 비용 저장
    fares.forEach(([x, y, cost]) => {
        g[x - 1][y - 1] = cost;
        g[y - 1][x - 1] = cost;
    })

    // i -> i로 가는 경우 0으로 리셋
    for (let i = 0; i < n; i++) {
        g[i][i] = 0;
    }

    return g;

}

shortestDis = (n, dist) => {
    // 플로이드 와샬
    // i -> j로 갈 때, i -> k -> j로 가는 경우의 비용이 더 싼 경우 갱신
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    return dist;
}

sharedRide = (s, a, b, shortest) => {
    let min = Infinity;

    // i까지 합승한 후, i에서 각자의 도착지로 가는 비용을 구해서 min과 비교
    for (let i = 0; i < shortest.length; i++) {
        min = Math.min(min, shortest[s - 1][i] + shortest[i][a - 1] + shortest[i][b - 1]);
    }
    return min;
}