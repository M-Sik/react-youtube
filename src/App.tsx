import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/headers/SearchHeader';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet></Outlet>
    </>
  );
}

export default App;
