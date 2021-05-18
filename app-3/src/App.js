import './App.css';
import Header from './components/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;


// API IN USE https://www.moogleapi.com/api/v1/characters