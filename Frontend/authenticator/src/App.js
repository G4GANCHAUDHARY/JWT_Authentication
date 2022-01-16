import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
