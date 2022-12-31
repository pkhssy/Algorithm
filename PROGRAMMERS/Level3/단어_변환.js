solution = (begin, target, words) => {
    let answer = 0;
    let visited = Array(words.length).fill(false);
    let queue = [begin];
    let count = 0;

    if (!words.includes(target)) return 0;

    let len = queue.length;
    while (len > 0) {
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (cur === target) return count;

            for (let j = 0; j < words.length; j++) {
                if (!visited[j] && check(cur, words[j])) {
                    queue.push(words[j]);
                    visited[j] = true;
                }
            }
        }
        count++;
    }
    return answer;
}

check = (a, b) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }
    return count === 1;
}