/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/161988
 * 어떤 수열의 연속 부분 수열에 같은 길이의 펄스 수열을 각 원소끼리 곱하여 연속 펄스 부분 수열을 만들려 합니다.
 * 펄스 수열: 또는 -1로 시작하면서 1과 -1이 번갈아 나오는 수열 ex) [1, -1, 1, -1 …], [-1, 1, -1, 1 …]
 * 연속 펄스 부분 수열의 합 중 가장 큰 것을 return
 * solution([2, 3, -6, 1, 3, -1, 2, 4]) => 10
 */

solution = (sequence) => {
    let seqPos = makeSequence(sequence, 1);
    let seqNeg = makeSequence(sequence, -1);

    return Math.max(maxSum(seqPos), maxSum(seqNeg));
}

makeSequence = (sequence, sign) => {
    let result = [];

    sequence.forEach((num, idx) => {
        if (idx % 2 === 0) {
            result.push(num * sign);
        } else {
            result.push(-num * sign);
        }
    });

    return result;
}

maxSum = (arr) => {
    let result = -Infinity;
    let max = 0;

    arr.forEach((value) => {
        max = Math.max(value, max + value);
        result = Math.max(max, result);
    });

    return result;
}



