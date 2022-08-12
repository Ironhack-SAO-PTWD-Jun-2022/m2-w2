function MovieCard({ movie }) {
  const {title, director, IMDBRating} = movie;

  return (
    <div className='MovieCard'>
      <h3>{title}</h3>
      <p>Director: {director}</p>
      <p>Rating: {IMDBRating}</p>
    </div>
  )
}

export default MovieCard;