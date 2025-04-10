function solution(genres, plays) {
    const genreMap = {};

    // 1. 장르별로 곡 정보와 총합 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!genreMap[genre]) {
            genreMap[genre] = {
                total: 0,
                songs: []
            };
        }

        genreMap[genre].total += play;
        genreMap[genre].songs.push({ id: i, play });
    }

    // 2. 장르를 총 재생수 기준으로 정렬
    const sortedGenres = Object.keys(genreMap).sort(
        (a, b) => genreMap[b].total - genreMap[a].total
    );

    const result = [];

    for (const genre of sortedGenres) {
        // 3. 곡을 play 내림차순, 고유 id 오름차순 정렬
        const sortedSongs = genreMap[genre].songs.sort((a, b) => {
            if (b.play !== a.play) return b.play - a.play;
            return a.id - b.id;
        });

        // 4. 최대 2개 추출
        result.push(...sortedSongs.slice(0, 2).map(song => song.id));
    }

    return result;
}