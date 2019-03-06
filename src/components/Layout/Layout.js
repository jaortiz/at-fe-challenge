import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 4.8rem 1rem;
`;

const Layout = ({ children }) => <LayoutWrapper>{children}</LayoutWrapper>;

export default Layout;
