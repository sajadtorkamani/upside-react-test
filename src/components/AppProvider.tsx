import React from 'react';
import GlobalStyle from '../theme/GlobalStyle';

const AppProvider: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default AppProvider;
