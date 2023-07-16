import Movie from "../Movie/Movie";

function MovieList({ movie }) {
    return (
        <Movie image={movie.poster_path} title={movie.title || movie.name} overview={movie.overview} date={movie.release_date || movie.first_air_date} lang={movie.original_language} type={movie.media_type} />
    )
} export default MovieList;