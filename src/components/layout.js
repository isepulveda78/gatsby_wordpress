import React from "react"
import MainMenu from '../components/mainmenu'
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body{
  font-family: 'Open Sans', sans-serif !important;
  margin: 0;
  padding: 0;
}
`
const LayoutWrapper = styled.div`
max-width: 960px;
margin: 0 auto;
`
const Layout = ({ children }) => (
  <div>
    <GlobalStyle/>
    <MainMenu/>
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
