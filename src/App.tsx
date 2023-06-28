import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/headers/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
      </QueryClientProvider>
    </>
  );
}

export default App;
