// Data Genre
let genre = [
    {
        genre: "action",
        title: "Action"
    },
    {
        genre: "adventure",
        title: "Adventure"
    },
    {
        genre: "cars ",
        title: "Cars "
    },
    {
        genre: "comedy",
        title: "Comedy"
    },
    {
        genre: "crime",
        title: "Crime"
    },
    {
        genre: "dementia",
        title: "Dementia"
    },
    {
        genre: "demons",
        title: "Demons"
    },
    {
        genre: "drama",
        title: "Drama"
    },
    {
        genre: "dub",
        title: "Dub"
    },
    {
        genre: "ecchi",
        title: "Ecchi"
    },
    {
        genre: "family",
        title: "Family"
    },
    {
        genre: "fantasy",
        title: "Fantasy"
    },
    {
        genre: "game",
        title: "Game"
    },
    {
        genre: "gourmet",
        title: "Gourmet"
    },
    {
        genre: "harem",
        title: "Harem"
    },
    {
        genre: "historical",
        title: "Historical"
    },
    {
        genre: "horror",
        title: "Horror"
    },
    {
        genre: "josei",
        title: "Josei"
    },
    {
        genre: "kids",
        title: "Kids"
    },
    {
        genre: "magic",
        title: "Magic"
    },
    {
        genre: "martial-arts",
        title: "Martial-arts"
    },
    {
        genre: "military",
        title: "Military"
    },
    {
        genre: "Mmusic",
        title: "Music"
    },
    {
        genre: "mystery",
        title: "Mystery"
    },
    {
        genre: "parody",
        title: "Parody"
    },
    {
        genre: "police",
        title: "Police"
    },
    {
        genre: "psychological",
        title: "Psychological"
    },
    {
        genre: "romance",
        title: "Romance"
    },
    {
        genre: "samurai",
        title: "Samurai"
    },
    {
        genre: "school",
        title: "School"
    },
    {
        genre: "sci-fi",
        title: "Sci fi"
    },
    {
        genre: "seinen",
        title: "Seinen"
    },
    {
        genre: "shoujo",
        title: "Shoujo"
    },
    {
        genre: "shoujo-ai",
        title: "Shoujo Ai"
    },
    {
        genre: "shounen",
        title: "Shounen"
    },
    {
        genre: "shounen-ai",
        title: "Shounen Ai"
    },
    {
        genre: "slice-of-Life",
        title: "Slice of Life"
    },
    {
        genre: "space",
        title: "Space"
    },
    {
        genre: "sports",
        title: "Sports"
    },
    {
        genre: "super-power",
        title: "Super Power"
    },
    {
        genre: "supernatural",
        title: "Supernatural"
    },
    {
        genre: "suspense",
        title: "Suspense"
    },
    {
        genre: "thriller",
        title: "Thriller"
    },
    {
        genre: "vampire",
        title: "Vampire"
    },
    {
        genre: "yaoi",
        title: "Yaoi"
    },
    {
        genre: "yuri",
        title: "Yuri"
    }
];

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const { response } = require('express');
const { json } = require('body-parser');

const app = express(); 
const port = process.env.PORT || 3000; 

app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json());
// app.use(expressLayouts);
app.use(express.static('public'));


const axios = require('axios').default;

// Index
app.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://gogoanime2.p.rapidapi.com/popular',
        headers: {
            'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
            'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        let dataPopular = response.data;
        axios('https://gogoanime.consumet.org/top-airing').then((response) => {
            let dataTopAiring = response.data;
            const options = {
                    method: 'GET',
                    url: 'https://gogoanime2.p.rapidapi.com/anime-movies',
                    params: {aph: 'A', page: '1'},
                    headers: {
                        'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
                };
                axios.request(options).then(function (response) {
                    let dataMovies = response.data;
                    const options = {
                            method: 'GET',
                            url: 'https://gogoanime2.p.rapidapi.com/recent-release',
                            params: {type: '1', page: '1'},
                            headers: {
                                'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
                                'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                            }
                        };
                        axios.request(options).then(function (response) {
                            let dataRecentEpisode = response.data;
                            res.render('index.ejs', {
                                dataPopular, dataTopAiring, dataMovies, dataRecentEpisode, genre
                            });
                        }).catch(function (error) {
                            console.error(error);
                        });
                }).catch(function (error) {
                    console.error(error);
                });
        }).catch(error => {
            console.log(error);
        })
    }).catch(function (error) {
        console.error(error);
    });
});

// Search
app.post('/searchAnime', (req, res) => {
    let dataSearch = req.body.search;
    const options = {
        method: 'GET',
        url: 'https://gogoanime2.p.rapidapi.com/search',
        params: {keyw: `${dataSearch}`},
        headers: {
            'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
            'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        let data = response.data;
        res.render('search.ejs', {
            data, dataSearch
        });
    }).catch(function (error) {
        console.error(error);
    });
});


// Detail
app.post('/detail', (req, res) => {
    let detailId = req.body.detailId;
    const options = {
        method: 'GET',
        url: `https://gogoanime2.p.rapidapi.com/anime-details/${detailId}`,
        headers: {
            'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
            'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        let data = response.data;
        let dataGenre = data.genres;
        let dataEpisode = data.episodesList;
        res.render('detail.ejs', {
            data, dataGenre, dataEpisode, detailId
        });
    }).catch(function (error) {
        console.error(error);
    });
});

// Genre
app.post('/genre', (req, res) => {
    const genreId = req.body.genre;
    const genreTitle = req.body.title;
    const options = {
        method: 'GET',
        url: `https://gogoanime2.p.rapidapi.com/genre/${genreId}`,
        params: {page: '-1'},
        headers: {
          'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
          'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        const data = response.data;
        res.render('genre.ejs', {
            data, genreTitle
        });
    }).catch(function (error) {
        console.error(error);
    });
});

// Streaming
app.post('/watch', (req, res) => {
    let episodeId = req.body.episodeId;
    let episodeNum = req.body.episodeNum;
    let detailId = req.body.detailId;
    axios(`https://gogoanime.consumet.org/vidcdn/watch/${episodeId}`).then(response => {
        let data = response.data.Referer;
        let dataBK = response.data.sources.file;
        const options = {
            method: 'GET',
            url: `https://gogoanime2.p.rapidapi.com/anime-details/${detailId}`,
            headers: {
                'X-RapidAPI-Key': '0fde83638amsh24ed700fc488847p1c5080jsn784a0c61c17b',
                'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            let dataDetail = response.data;
            let dataEpisode = dataDetail.episodesList;
            res.render('streaming.ejs', {
                data, dataEpisode, detailId, episodeNum, dataDetail, dataBK
            });
        }).catch(function (error) {
            console.error(error);
        });
    }).catch(error => {
        console.log(error);
    });
});

app.listen(port, () => console.log(`Server running at ${port}`));