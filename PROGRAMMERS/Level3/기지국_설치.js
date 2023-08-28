/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/12979
 * N: 아파트 개수 (N < 200,000,000)
 * stations: 현재 기지국이 설치된 아파트의 번호가 담긴 1차원 배열 (크기는 10,000 이하의 자연수, 오름차순 정렬, 배열에 담긴 수는 <= N)
 * W: 전파의 도달 거리 (10,000 이하의 자연수)
 * 모든 아파트에 전파를 전달하기 위해 증설해야 할 기지국 개수의 최솟값을 리턴하는 solution 함수
 * solution(11, [4, 11], 1) => 3
 * solution(16, [9], 2) => 3
 */

const solution = (n, stations, W) => {
    let answer = 0; // 필요한 증설 기지국의 최소 개수를 담을 변수
    let start = 1; // 현재 검사 중인 구간의 시작 위치를 나타내는 변수
    const stationRange = (W * 2) + 1; // 하나의 기지국으로 커버되는 아파트 범위

    // 주어진 두 지점 사이의 구간을 몇 번의 전파로 커버해야 하는지 계산하는 함수
    const calculateRange = (start, end) => {
        const range = end - start; // 구간의 길이 계산
        return Math.ceil(range / stationRange); // 전파로 커버하는 횟수 계산하여 반환
    };

    // 각 기지국 위치마다 반복
    stations.forEach((station) => {
        let end = station - W; // 현재 기지국의 전파가 닿는 범위의 끝 위치 계산
        if (end >= start) { // 전파가 현재 구간을 커버할 수 있는 경우
            answer += calculateRange(start, end); // 커버하는 횟수를 더해줌
        }
        start = station + W + 1; // 다음 검사할 구간의 시작 위치 업데이트
    });

    // 마지막 기지국 이후 남은 구간을 처리
    if (start <= n) { // 마지막 기지국 이후에도 아직 커버되지 않은 구간이 있다면
        answer += calculateRange(start, n + 1); // 남은 구간을 커버하는 횟수를 더해줌
    }

    return answer; // 최종 필요한 기지국 개수 반환
}