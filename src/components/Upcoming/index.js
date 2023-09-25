import {Component} from 'react'
import Header from '../Header'
import './index.css'
import PopularMovieItem from '../PopularMovieItem'

const stage = {
  success: 'success',
  loading: 'loading',
  failed: 'failed',
}

class Upcoming extends Component {
  state = {list: [], stage1: stage.loading}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    this.setState({stage1: stage.loading})
    const API_KEY = '94538d285d0bc3c7705fb5023a2c0e3b'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    )
    const data = await response.json()
    if (response.ok === true) {
      this.setState({list: data.results, stage1: stage.success})
    } else {
      this.setState({stage1: stage.failed})
    }
  }

  renderList = () => {
    const {stage1, list} = this.state

    switch (stage1) {
      case stage.loading:
        return <h1>Loading</h1>
      case stage.failed:
        return <h1>Failed</h1>
      case stage.success:
        return (
          <div>
            <ul className="ul">
              {list.map(each => (
                <PopularMovieItem list={each} key={`movie${each.id}`} />
              ))}
            </ul>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.renderList()}</div>
      </div>
    )
  }
}

export default Upcoming
