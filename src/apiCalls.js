const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not OK`);
      }
      return response.json();
    })
};

const getSelectedMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not OK`);
      }
      return response.json();
    })
}

export { getAllMovies, getSelectedMovie };