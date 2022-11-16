import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3/search",
  apiKey: "?api_key=e99307154c6dfb0b4750f6603256716d",
  // &query=a&language=it-IT
  endPointMovie: "/movie",
  endPointTv: "/tv",
  movies: [],
  series: [],
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
        })
        .catch((errore) => {
          console.log(errore);
          if (errore.response.status === 422) {
            return;
          }
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
});
