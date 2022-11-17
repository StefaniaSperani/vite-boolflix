import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3",
  apiKey: "?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT",
  endPointMovie: "/search/movie",
  endPointTv: "/search/tv",
  endPointDiscover: "/discover/movie",
  movies: [],
  series: [],
  discover: [],
  query: "",
  isLoading: true,

  // FUNCTIONS
  getMovies() {
    if (this.query) {
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
    } else {
      this.movies = [];
      this.series = [];
      this.isLoading = true;
    }
  },
  // discover() {
  //   axios.get(this.apiURL + this.endPointDiscover + this.apiKey).then((res) => {
  //     this.discover = res.data.results;
  //     console.log(res.data.results);
  //   });
  //},
});
