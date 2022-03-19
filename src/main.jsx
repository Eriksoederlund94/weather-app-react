import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Global Styles
import GlobalStyles from './GlobalStyles';

// React query import
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClitent = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClitent}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
