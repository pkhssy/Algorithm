/***********************************************************
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 * 장르별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 구성
 * 노래는 고유 번호로 구분
 * 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 매개변수
 * genres[i]는 i번째 노래의 장르, plays[i]는 i번째 노래가 재생된 횟수
 * genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하
 * 장르 종류는 100개 미만
 * 장르에 속한 곡이 하나라면, 하나의 곡만 선택
 * 모든 장르는 재생된 횟수가 다르다
 * solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500] ) => [4, 1, 3, 0]
 */
const solution = (genres, plays) => {
    // 장르별 총 재생수를 계산하는 객체 생성
    const genrePlays = genres.reduce((acc, cur, idx) => {
        acc[cur] = acc[cur] ? acc[cur] + plays[idx] : plays[idx];
        return acc;
    }, {});

    // 총 재생수를 기준으로 장르 내림차순 정렬
    const sortedGenres = Object.keys(genrePlays).sort((a, b) => genrePlays[b] - genrePlays[a]);

    // 각 장르별로 노래의 재생수 내림차순으로 정렬하여 2개씩 answer 배열에 삽입
    return sortedGenres.flatMap(genre =>
        genres
            .map((genreName, idx) => [genreName, plays[idx], idx])    // [장르, 재생수, 인덱스]로 맵핑
            .filter(([genreName]) => genreName === genre)             // 장르별로 데이터 필터링
            .sort((a, b) => b[1] - a[1])                              // 내림차순 정렬
            .slice(0, 2)                                              // 많이 재생된 노래 두개만 추출
            .map(([, , idx]) => idx)                                  // 인덱스만 저장
    );
};