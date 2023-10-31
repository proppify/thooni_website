import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Layout/Header/NavBar';
import Routing from './Routing/Routing';
import Footer from './Layout/Footer/Footer';
import NewFloatingButton from './Components/NewFloatingButton';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <NewFloatingButton onclickFunc={'https://api.whatsapp.com/send?phone=+917358295552&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.'} />
          <NavBar />
          <Routing />
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
