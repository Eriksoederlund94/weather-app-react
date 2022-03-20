import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//React Router Dom Import
import { BrowserRouter } from 'react-router-dom';

// Global Styles
import GlobalStyles from './GlobalStyles';

// React query import
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClitent = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClitent}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
