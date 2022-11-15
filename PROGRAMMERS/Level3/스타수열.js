function solution(a) {
    let result = 0;
    const count = numCount(a);

    for (const key in count) {
        if (count[key] < result) continue;

        let cnt = 0;
        for (let i = 0; i < a.length - 1; i++) {
            if ((a[i] == key || a[i + 1] == key) && (a[i] !== a[i + 1])) {
                cnt++;
                i++;
            }
        }
        result = Math.max(result, cnt);
    }

    return result * 2;
}

function numCount(arr) {
    let counts = {};

    arr.forEach(num => {
        counts[num] = counts[num] ?? 0;
        counts[num] += 1;
    });

    return counts;
}