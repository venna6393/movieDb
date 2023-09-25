import {Route, Switch} from 'react-router-dom'
import Notfound from './components/Notfound'
import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import './components/Header/index.css'
import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route component={Notfound} />
    </Switch>
  </div>
)

export default App
