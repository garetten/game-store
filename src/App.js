import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Header from './components/header/header';
import { Provider } from 'react-redux';
import store from './redux/index';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />

          </Routes>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
