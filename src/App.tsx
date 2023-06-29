import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/headers/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet></Outlet>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
