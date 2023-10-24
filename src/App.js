import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Layout/Header/NavBar';
import Routing from './Routing/Routing';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <NavBar />
          <Routing />
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
