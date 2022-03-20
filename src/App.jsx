import { useState } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router';

// Pages
import HomePage from './pages/HomePage';
import WeatherPrognosPage from './pages/WeatherPrognosPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [searchString, setSearchString] = useState('');

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage searchString={searchString} setSearchString={setSearchString} />} />
          <Route
            path='/weather-prognos'
            element={<WeatherPrognosPage searchString={searchString} setSearchString={setSearchString} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
