import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
