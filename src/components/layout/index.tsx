import React from 'react';
import styled from 'styled-components';
import Header, { HEADER_HEIGHT } from './Header';

const Layout: React.FC = ({ children, ...props }) => (
  <StyledLayout {...props}>
    <Header />
    <div>
      <main>{children}</main>
    </div>
  </StyledLayout>
);

const StyledLayout = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: 60px;
`;

export default Layout;
