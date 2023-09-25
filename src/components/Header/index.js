import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="nav">
        <div>
          <h1>movieDB</h1>
        </div>
        <div>
          <input type="search" />
          <button type="button">Search</button>
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="b1" type="button">
              Popular
            </button>
          </Link>
          <Link to="/top-rated">
            <button className="b1" type="button">
              Top Rated
            </button>
          </Link>
          <Link to="/upcoming">
            <button className="b1" type="button">
              Upcoming
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
