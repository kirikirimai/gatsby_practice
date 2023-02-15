

import React from 'react'
import {css} from "@emotion/react";
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div>
        <h1>ヘッダー</h1>
        <ul css={navStyle.list}>
            <li><Link to='/'>トップへ</Link></li>
            <li><Link to='/imagedisp'>gatsbyの画像の練習</Link></li>
        </ul>
    </div>
  )
}

const navStyle={
    list:css`
    display: flex;
    list-style: none;

    li:not(:first-child){
      margin-left: 30px;
    }
    a{
      color:skyblue;
    }
    `
}

export default Header