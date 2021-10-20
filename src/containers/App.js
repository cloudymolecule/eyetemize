import '../styles/App.css'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Menu from './Menu'

function App() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <Title />
        <Menu />
        <Footer />
      </div>
    </div>
  )
}

export default App
