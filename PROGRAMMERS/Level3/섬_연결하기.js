solution = (n, costs) => {
    costs.sort((a, b) => a[2] - b[2]);
    let answer = 0;
    let parent = Array(n).fill(0).map((v, i) => i);
    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }
    const union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a < b) parent[b] = a;
        else parent[a] = b;
    }
    for (let [a, b, cost] of costs) {
        if (find(a) !== find(b)) {
            union(a, b);
            answer += cost;
        }
    }
    return answer;
}