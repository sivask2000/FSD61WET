class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

  const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "PG"),
    new Movie("Movie4", "Studio4", "R")
  ];
  
  const pgMovies = Movie.getPG(movies);
  pgMovies.forEach(movie => {
    console.log(`Title: ${movie.title}, Studio: ${movie.studio}, Rating: ${movie.rating}`);
  });
  