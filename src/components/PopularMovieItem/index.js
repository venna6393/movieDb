import {Link} from 'react-router-dom'
import './index.css'

const PopularMovieItem = props => {
  const {list} = props
  return (
    <li className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${list.poster_path}`}
        alt={list.title}
        className="image"
      />
      <p>{list.title}</p>
      <p>{list.vote_average}</p>
      <Link to={`/single/${list.id}`}>
        <button type="button">View Details</button>
      </Link>
    </li>
  )
}

export default PopularMovieItem
