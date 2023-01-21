import './App.css';
import Header from './Header';
import Menu from './Menu';
import Reservation from './Reservation';
import Address from './Address';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Reservation/>
      <Address/>
      <Footer/>
    </div>
  )
}

export default App;