import './App.scss'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
