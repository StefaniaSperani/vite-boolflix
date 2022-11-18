import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3",
  apiKey: "?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT",
  endPointMovie: "/search/movie",
  endPointTv: "/search/tv",
  endPointPopular: "/movie/popular",
  // endPointGenres: "/genre/movie/list",
  endPointDiscover: "/discover/movie",
  // endPointWG: "&with_genres=",
  movies: [],
  series: [],
  // genres: [],
  popular: [],
  query: "",
  // genreName: "",
  isLoading: true,

  // FUNCTIONS
  getMovies() {
    axios
      .get(this.apiURL + this.endPointMovie + this.apiKey, {
        params: {
          query: this.query,
        },
      })
      .then((res) => {
        this.movies = res.data.results;
      }),
      axios
        .get(this.apiURL + this.endPointTv + this.apiKey, {
          params: {
            query: this.query,
          },
        })
        .then((res) => {
          this.series = res.data.results;
          this.isLoading = false;
        });
  },
  getPopular() {
    axios.get(this.apiURL + this.endPointPopular + this.apiKey).then((res) => {
      this.popular = res.data.results;
      this.isLoading = false;
    });
  },

  // getGenres() {
  //   axios.get(this.apiURL + this.endPointGenres + this.apiKey).then((res) => {
  //     this.genres = res.data.genres;
  //     console.log(this.genres);
  //   });
  // },
  // changeGenre(event) {
  //   let genreId = event.target.value;
  //   console.log(event.target.value);
  //   axios
  //     .get(
  //       this.apiURL +
  //         this.endPointDiscover +
  //         this.apiKey +
  //         this.endPointWG +
  //         genreId
  //     )
  //     .then((res) => {
  //       this.discover = res.data.results;
  //     });
  //   if (genreId) {
  //     this.genreName = this.genres.filter((g) => g.id == genreId);
  //     console.log(this.genreName.name);
  //   }
  // },
});
