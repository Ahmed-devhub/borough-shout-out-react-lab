import './App.css'
import BoroughCard from './BoroughCard'

function App() {
  return (
    <div>
      <h1>NYC Boroughs</h1>
      <BoroughCard borough="Brooklyn" bgColor="#f6c" />
      <BoroughCard borough="Manhattan" bgColor="#9cf" />
      <BoroughCard borough="Bronx" bgColor="#fc9" />
      <BoroughCard borough="Staten Island" bgColor="#cfc" />
      <BoroughCard /> {/* Defaults to Queens */}
    </div>
  )
}

export default App
