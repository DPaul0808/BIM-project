export interface DetailedMovie{
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: [{Source: string, Value: string}];
    Type: string;
    BoxOffice: string;
    Runtime: string;
}