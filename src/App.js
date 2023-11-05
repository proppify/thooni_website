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
          <NewFloatingButton onclickFunc={'https://api.whatsapp.com/send?phone=+917358295552&text=Hello%21+I+would+like+more+information+about%C2%A0Thooni'} />
          <NavBar />
          <Routing />
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
