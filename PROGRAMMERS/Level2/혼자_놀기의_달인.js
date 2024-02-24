/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/131130
 * 1부터 100까지 숫자가 하나씩 적혀있는 100장의 카드가 있다.
 * 2 이상 100 이하의 자연수를 하나 정해 그 수보다 작거나 같은 숫자 카드를 준비
 * 상자에 카드를 한 장씩 넣고, 상자를 무작위로 섞어 일렬로 나열
 * 상자가 나열된 순서에 따라 1번부터 순차적으로 증가하는 번호를 붙인다.
 * 임의의 상자를 하나 선택해 상자 안에 숫자 카드를 확인
 * 다음으로 확인한 카드에 적힌 번호에 해당하는 상자를 열어 그 안에 있는 카드를 확인
 * 이 과정을 반복해 모든 상자를 오픈
 * 이렇게 연 상자들은 1번 상자 그룹
 * 1번 상자 그룹을 제외하고 남는 상자가 없으면 게임이 종료, 획득 점수는 0점
 * 남은 상자 중 다시 임의의 상자 하나를 골라 같은 방식으로 이미 열려있는 상자를 만날 때까지 상자를 오픈 -> 2번 상자 그룹
 * 1번 상자 그룹에 속한 상자의 수 * 2번 상자 그룹에 속한 상자의 수 = 점수
 * 얻을 수 있는 최고 점수를 구해서 반환하는 함수를 작성
 * 2 <= cards: 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열 <= 100
 * solution([8,6,3,7,2,5,1,4]) => 12
 */

solution = (cards) => {
    let isOpened = Array(cards.length + 1).fill(false);
    const cardsObj = Object.fromEntries(cards.map((card, i) => [i + 1, card]));

    let answer = [];

    for (let i = 1; i <= cards.length; i++) {
        if (!isOpened[i]) {
            const group = [];
            let currentIdx = i;

            while (!isOpened[currentIdx]) {
                const nextIdx = cardsObj[currentIdx];
                isOpened[currentIdx] = true;
                group.push(cardsObj[currentIdx]);
                currentIdx = nextIdx;
            }

            answer.push(group);
        }
    }

    answer.sort((a, b) => b.length - a.length);

    return answer.length !== 1 ? answer[0].length * answer[1].length : 0;
}