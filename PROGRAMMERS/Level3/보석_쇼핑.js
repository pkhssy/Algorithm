/***********************************************************
 * https://programmers.co.kr/learn/courses/30/lessons/67258
 * 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어진다
 * 모든 보석을 하나 이상 포함하는 가장 짧은 구간의 시작과 끝을 배열에 담아 리턴한다
 * solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]) => [3, 7]
 * solution(["AA", "AB", "AC", "AA", "AC"]) => [1, 3]
 * solution(["XYZ", "XYZ", "XYZ"]) => [1, 1]
 * solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]) => [1, 5]
 ***********************************************************/

solution = (gems) => {
    const gemCnt = new Set(gems).size;
    const gemMap = new Map();
    let result = [0, 100000];

    gems.forEach((gem, i) => {
        gemMap.delete(gem);
        gemMap.set(gem, i);

        if (gemMap.size === gemCnt) {
            const [start, end] = [gemMap.values().next().value, i];
            if (end - start < result[1] - result[0]) {
                result = [start + 1, end + 1];
            }
            gemMap.delete(gems[start]);
        }
    });

    return result;
};