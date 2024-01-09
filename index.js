const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmRhMGM0Y2U2NTFhNTJlYzY5YTgyZTU4NTFlYjZiNCIsInN1YiI6IjY1OWNiMWM3Zjg1OTU4MDI1ZWNiNmE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_ZDFkomYPMe8RaA3EQBDzyz70g0FNEjYp_6biGUbDI'
    }
};
function getMovie() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1', options)
        .then(response => response.json())
        .then(response => showMovie(response.results))
        .catch(err => console.error(err));
}
getMovie();

function showMovie(response) {
    for (let i = 0; i < response.length; i++) {
        let title = response[i]['title'];
        let overview = response[i]['overview'];
        let poster_path = response[i]['poster_path'];
        let vote_average = response[i]['vote_average'];
        let id = response[i]['id'];
        let imageurl = 'https://image.tmdb.org/t/p/w500';
        let temp_html = `
            <div id = "card${id}" class="col">
                <div class="card h-100">
                    <img onclick="showid(${id})" src="${imageurl + poster_path}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${overview}</p>
                        <p class="card-average">${vote_average}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">엘범 날짜</small>
                    </div>
                </div>
            </div>
            `

        let test = document.querySelector(".row");
        test.insertAdjacentHTML('beforeend', temp_html);

    }

}
function showid(id) {
    alert(`${id}`)
}