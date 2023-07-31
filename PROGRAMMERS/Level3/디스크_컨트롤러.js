/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/42627
 * 1 <= [작업이 요청되는 시점, 작업의 소요시간] <= 500
 * 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리
 * 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)
 * solution([[0, 3], [1, 9], [2, 6]]) => 9
 */

solution = (jobs) => {
    let answer = 0; // 총 작업 시간
    let time = 0;   // 현재 시간
    const queue = [];   // 대기 큐
    const length = jobs.length; // 총 작업 개수

    jobs.sort((a, b) => a[0] - b[0]);   // 요청 시간 기준으로 오름차순 정렬

    while (jobs.length || queue.length) {   // 작업이 남아있거나, 대기 중인 작업이 있을 때
        while (jobs.length && jobs[0][0] <= time) {   // 현재 시간보다 이전에 요청된 작업이 있다면
            queue.push(jobs.shift());   // 대기 큐에 넣어준다.
        }
        if (queue.length) { // 대기 중인 작업이 있다면
            queue.sort((a, b) => a[1] - b[1]);  // 소요 시간 기준으로 오름차순 정렬
            const [start, duration] = queue.shift();    // 가장 빨리 끝나는 작업을 꺼낸다.
            time += duration;   // 현재 시간을 소요 시간만큼 증가
            answer += time - start; // 총 작업 시간에 (현재 시간 - 요청 시간)을 더해준다.
        } else {
            time = jobs[0][0];  // 대기 중인 작업이 없다면 현재 시간을 다음 작업의 요청 시간으로 변경
        }
    }

    return Math.floor(answer / length); // 총 작업 시간을 작업 개수로 나눈 몫을 반환
}