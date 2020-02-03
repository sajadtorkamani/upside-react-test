import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import GlobalStyle from '../theme/GlobalStyle';
import store from '../store';

const AppProvider: React.FC = ({ children }) => (
  <>
    <StoreProvider store={store}>
      <GlobalStyle />
      {children}
    </StoreProvider>
  </>
);

export default AppProvider;
