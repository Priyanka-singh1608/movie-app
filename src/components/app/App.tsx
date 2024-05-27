import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../home/Home';
import { Contacts } from '../contacts/Contacts';
import { Layout } from '../layout/Layout';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
