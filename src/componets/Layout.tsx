import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {css} from "@emotion/react";

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div css={wrapper}>
    <Header/>
        {children}
    <Footer/>
    </div>
  )
}

const wrapper=css`
width: 100%;
max-width: 980px;
margin: auto;
`

export default Layout