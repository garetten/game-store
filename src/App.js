import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Header from './components/header/header';
import { Provider } from 'react-redux';
import store from './redux/index';
import GamePage from './pages/game-page/game-page';
import OrderPage from './pages/order-page/order-page';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/:title" element={<GamePage/>} />
            <Route path="/order" element={<OrderPage/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
