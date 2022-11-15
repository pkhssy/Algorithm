let result = Array(100001).fill().map((_, i) => [100001, 0]);
let values = Array(20).fill().map((_, i) => i + 1);
values.forEach((v, i) => {
    values.push(v * 2);
    values.push(v * 3);
})
values.push(50);
values = [...new Set(values)];

function solution(target) {
    underSixty(target);
    if (target > 60) overSixty(target);

    return result[target];
}

function underSixty(target) {
    for (let i = 1; i <= target && i <= 60; i++) {
        if (values.includes(i)) {
            result[i][0] = 1;
            if (i === 50 || i <= 20) {  // 불 || 싱글
                result[i][1] = 1;
            }
        } else {
            if (i > 50 || i <= 40) { // 불 + 싱글 || 싱글 + 싱글
                result[i] = [2, 2];
            } else {
                result[i] = [2, 1];
            }
        }
    }
}

function overSixty(target) {
    for (let i = 61; i <= target; i++) {
        if (result[i - 50][0] <= result[i - 60][0]) { // 불 사용
            result[i] = [result[i - 50][0] + 1, result[i - 50][1] + 1]
        } else {
            result[i] = [result[i - 60][0] + 1, result[i - 60][1]];
        }
    }
}