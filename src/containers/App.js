import '../styles/App.css'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Menu from './Menu'

function App() {
  return (
    <Router>
      <div className='outer-container'>
        <div className='inner-container'>
          <Title />
          <Menu />
          <Switch>
            <Route path='/new' exact component={New} />
            <Route path='/notes' exact component={Notes} />
            <Route path='/about' exact component={About} />
          </Switch>
          <Footer />

        </div>
      </div>
    </Router>
  )
}

export default App
