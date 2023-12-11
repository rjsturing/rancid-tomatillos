const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Oopsie! Nothing to see here!");
        } else if (response.status >= 500) {
          throw new Error("Oopsie! Something went wrong, please try again later.");
        } else {
          throw new Error(`Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
}

const getSelectedMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Oopsie! Nothing to see here!");
        } else if (response.status >= 500) {
          throw new Error("Oopsie! Something went wrong, please try again later.");
        } else {
          throw new Error(`Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
}

export { getAllMovies, getSelectedMovie };