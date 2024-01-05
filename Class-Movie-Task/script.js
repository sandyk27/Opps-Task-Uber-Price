class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    };

    MovieName() {
        console.log(`The Movie is ${this.title} 
        production of the film in ${this.studio} 
        and the movie rating of ${this.rating} `);
      };
    };

    const film = new Movie("Thuniv","Zee 5 Production","4.5/5","PG-13");
    console.log(film);
    film.MovieName();
      